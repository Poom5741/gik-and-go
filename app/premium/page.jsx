'use client';

import "./premium.css";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from 'framer-motion';

/* ─────────── motion primitives ─────────── */
const EASE = [0.22, 1, 0.36, 1];

function Words({ text, className, delay = 0 }) {
  // staggered word-cascade entrance (§2.2 typography engine)
  return (
    <span className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.07 }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function Reveal({ children, delay = 0, y = 40, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* magnetic button (§3.2) — pointer-fine only via CSS fallback */
function Magnetic({ children, className, href, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      className={className}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.a>
  );
}

/* ─────────── page ─────────── */
export default function Premium() {
  const [loaded, setLoaded] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const artY = useTransform(scrollYProgress, [0, 1], [0, 120]);   // parallax layers (§3.1)
  const txtY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Lenis smooth scroll (§6)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setLoaded(true); return; }
    let lenis;
    (async () => {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({ lerp: 0.09 });
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
      setTimeout(() => setLoaded(true), 700);
    })();
    return () => lenis && lenis.destroy();
  }, []);

  // hide-on-scroll-down nav (§2.3)
  useEffect(() => {
    const onScroll = (y) => {
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    if (window.lenisInstance) return;
    window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  const steps = [
    { n: '1', t: 'ทัก LINE ส่งข้อมูล', d: 'บอกว่าจะทำเรื่องอะไร พี่กิ้กส่งเช็กลิสต์มาให้กรอก ใช้เวลาไม่ถึง 15 นาที', img: '/assets/png/step1-line.png' },
    { n: '2', t: 'พี่กิ้กยื่นให้', d: 'ตรวจเอกสาร จัดทำแบบฟอร์ม และยื่นจดทะเบียนกับ พบ. ให้ถูกต้อง พร้อมอัปเดตสถานะทุกขั้น', img: '/assets/png/step2-file.png' },
    { n: '3', t: 'รับเอกสารถึงมือ', d: 'หนังสือรับรองและเอกสารส่งถึงทาง LINE และไปรษณีย์ ใช้ต่อได้ทันที', img: '/assets/png/step3-docs.png' },
  ];
  const services = [
    { t: 'จดทะเบียนจัดตั้งบริษัท', p: '฿6,900', hot: true, items: ['จองชื่อนิติบุคคล', 'จัดทำข้อบังคับทั้งหมด', 'ยื่น บจ. + เลขผู้เสียภาษี', 'ตราประทับบริษัท'] },
    { t: 'เปลี่ยนชื่อบริษัท', p: '฿3,500', items: ['ตรวจ-จองชื่อใหม่', 'มติผู้ถือหุ้น', 'ยื่น บจ. แก้ไขทะเบียน'] },
    { t: 'เปลี่ยนผู้กระทำการ / ทุน / ที่ตั้ง', p: '฿2,900', items: ['เตรียมมติ + เอกสาร บจ.', 'ยื่นภายใน 3 วันทำการ', 'แจ้งกรมสรรพากร'] },
    { t: 'จำหน่าย / ปิดกิจการ', p: '฿7,500', items: ['มติพิเศษ', 'ติดประกาศเจ้าหนี้', 'ยื่น บจ.3 คืนทะเบียน'] },
  ];

  return (
    <main className="pm">
      {/* grain overlay (§4) */}
      <div className="pm-grain" aria-hidden />

      {/* preloader (§2.1) */}
      <AnimatePresence>
        {!loaded && (
          <motion.div className="pm-preloader" exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.9, ease: EASE }}>
            <motion.img src="/assets/png-cut/logo-chibi.png" alt=""
              initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: EASE }} />
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Gik &amp; Go</motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* nav: glass + hide on scroll down (§2.3, §4) */}
      <motion.header className="pm-nav glass"
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.4, ease: EASE }}>
        <a href="#" className="pm-logo"><img src="/assets/png-cut/logo-chibi.png" alt="" /> Gik &amp; Go</a>
        <nav>
          {[['บริการ', '#pm-services'], ['ขั้นตอน', '#pm-how'], ['ทำไมต้องเรา', '#pm-why'], ['คำถาม', '#pm-faq']].map(([t, h]) => (
            <a key={h} href={h}>{t}</a>
          ))}
          <Magnetic href="#pm-contact" className="btn pm-cta">ทัก LINE</Magnetic>
        </nav>
      </motion.header>

      {/* hero: full viewport, parallax art, cascading headline (§2.2, §3.1) */}
      <section className="pm-hero" ref={heroRef}>
        <div className="pm-hero-bg" aria-hidden />
        <div className="pm-hero-grid">
          <motion.div style={{ y: txtY }}>
            <motion.p className="pm-kicker glass" initial={{ opacity: 0, y: 20 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: EASE }}>
              จดทะเบียนนิติบุคคล · งาน พบ. · ราคาเหมาจ่าย
            </motion.p>
            <h1 className="pm-h1">
              <Words text="พี่กิ้กจัดการให้" delay={0.15} />
              <span className="pm-h1-line">
                <Words text="เรื่อง" delay={0.35} />
                <span className="pm-accent"><Words text="ทะเบียนบริษัท" delay={0.45} /></span>
              </span>
              <Words text="จบในที่เดียว" delay={0.65} />
            </h1>
            <motion.p className="pm-sub" initial={{ opacity: 0, y: 24 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}>
              ตั้งบริษัท เปลี่ยนชื่อ เปลี่ยนผู้กระทำการ ปิดกิจการ — ส่งเรื่องผ่าน LINE
              แล้วไปทำเรื่องสำคัญของคุณต่อได้เลย
            </motion.p>
            <motion.div className="pm-cta-row" initial={{ opacity: 0, y: 24 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, ease: EASE, delay: 1.05 }}>
              <Magnetic href="#pm-contact" className="btn pm-cta-big">ทัก LINE ปรึกษาฟรี →</Magnetic>
              <Magnetic href="#pm-services" className="btn pm-ghost">ดูราคา</Magnetic>
            </motion.div>
          </motion.div>
          <motion.div className="pm-hero-art" style={{ y: artY }}>
            <motion.img src="/assets/png-cut/about-gik.png" alt="พี่กิ้ก มาสคอต"
              initial={{ opacity: 0, y: 60, rotate: -2 }}
              animate={loaded ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 1.2, ease: EASE, delay: 0.5 }} />
            <motion.div className="pm-float glass" animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}>
              เอกสารไม่ผ่าน → แก้ฟรีจนผ่าน 🛡️
            </motion.div>
          </motion.div>
        </div>
        <motion.div className="pm-scroll-hint" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }}>
          ▼
        </motion.div>
      </section>

      {/* services: glass cards, staggered reveal */}
      <section id="pm-services" className="pm-section">
        <Reveal><h2 className="pm-h2">บริการ &amp; ราคาแบบเหมาจ่าย</h2></Reveal>
        <Reveal delay={0.1}><p className="pm-lede">ราคานี้คือราคาจริง ไม่มีบวกเพิ่ม <span className="en">(ตัวเลขตัวอย่าง — ยืนยันก่อนเปิดใช้)</span></p></Reveal>
        <div className="pm-cards">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.08} className={'pm-card glass' + (s.hot ? ' hot' : '')}>
              {s.hot && <span className="pm-tag">ฮิตสุด</span>}
              <h3>{s.t}</h3>
              <div className="pm-price">{s.p}<small>/เรื่อง</small></div>
              <ul>{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* steps: pinned-feel reveal strip (§3.1) */}
      <section id="pm-how" className="pm-section pm-dark">
        <Reveal><h2 className="pm-h2">ง่ายแค่ 3 ขั้นตอน</h2></Reveal>
        <Reveal delay={0.1}><p className="pm-lede">คุณแค่ส่งข้อมูล ที่เหลือพี่กิ้กจัดการเอง</p></Reveal>
        <div className="pm-steps">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12} className="pm-step">
              <div className="pm-step-img"><img src={s.img} alt={s.t} /><span className="pm-num">{s.n}</span></div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* why */}
      <section id="pm-why" className="pm-section">
        <Reveal><h2 className="pm-h2">ทำไมต้อง Gik &amp; Go</h2></Reveal>
        <Reveal delay={0.1}><p className="pm-lede">ไม่ใช่สำนักงานกฎหมาย — แต่เราทำงานทะเบียนได้แม่นกว่า</p></Reveal>
        <div className="pm-why-grid">
          {[['⚡', 'รวดเร็ว', 'ยื่นภายใน 3 วันทำการหลังเอกสารครบ'], ['🛡️', 'เชื่อถือได้', 'ทีมชำนาญงาน พบ. เช็กซ้ำก่อนยื่นทุกครั้ง'], ['🏷️', 'ราคาเหมาจ่าย', 'ประกาศราคาบนเว็บ ไม่มีค่าใช้จ่ายแอบแฝง'], ['🎧', 'คุยง่าย', 'คุยผ่าน LINE ได้ตลอดชั่วโมงทำการ ไม่ต้องเดินทาง']].map(([e, t, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="pm-why glass">
              <span className="pm-why-em">{e}</span><h3>{t}</h3><p>{d}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="pm-guarantee glass"><span className="em">🛡️</span> รับประกัน: เอกสารไม่ผ่านการพิจารณา → พี่กิ้กแก้ไขและยื่นใหม่ให้ <u>ฟรี</u> จนกว่าจะผ่าน</Reveal>
      </section>

      {/* faq */}
      <section id="pm-faq" className="pm-section">
        <Reveal><h2 className="pm-h2">คำถามที่พบบ่อย</h2></Reveal>
        <div className="pm-faqs">
          {[['ตั้งบริษัทต้องใช้เอกสารอะไรบ้าง?', 'ชื่อบริษัท (มี 2-3 ชื่อสำรอง), ที่อยู่สำนักงาน, ข้อมูลผู้ถือหุ้นและผู้กระทำการ — ทัก LINE รับเช็กลิสต์ได้เลย'],
            ['ใช้เวลานานแค่ไหน?', 'ตั้งบริษัท 5-7 วันทำการ, เปลี่ยนชื่อ/ผู้กระทำการ 3-5 วันทำการ นับจากเอกสารครบ'],
            ['เป็นสำนักงานกฎหมายหรือเปล่า?', 'เราเป็นทีมชำนาญงาน พบ. โดยเฉพาะ — งานทะเบียนเป็นงานเอกสารมาตรฐาน เราจึงทำได้ถูกต้องและราคาถูกกว่า'],
            ['อยู่ต่างจังหวัดทำได้ไหม?', 'ได้ ทุกอย่างทำผ่าน LINE และไปรษณีย์ ไม่ต้องเดินทางมากรุงเทพฯ']].map(([q, a], i) => (
            <Reveal key={q} delay={i * 0.06} className="pm-faq glass">
              <details open={i === 0}><summary>{q}</summary><p>{a}</p></details>
            </Reveal>
          ))}
        </div>
      </section>

      {/* footer cta */}
      <section id="pm-contact" className="pm-foot">
        <div className="pm-foot-grid">
          <Reveal>
            <h2 className="pm-h2">พร้อมส่งเรื่องให้พี่กิ้กหรือยัง?</h2>
            <p className="pm-lede">ทัก LINE มาปรึกษาได้ฟรี ไม่มีค่าใช้จ่าย</p>
            <Magnetic href="#" className="btn pm-cta-big">ทัก LINE: @gikngo</Magnetic>
          </Reveal>
          <Reveal delay={0.15} className="pm-foot-art">
            <img src="/assets/png-cut/hero-approved.png" alt="" />
          </Reveal>
        </div>
        <div className="pm-foot-bottom">© 2026 Gik &amp; Go (กิ้ก แอนด์ โก) · โทร 0X-XXX-XXXX · จันทร์–เสาร์ 09:00–18:00</div>
      </section>
    </main>
  );
}
