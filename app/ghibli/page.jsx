'use client';

import "./ghibli.css";

import { useEffect, useRef, useState } from 'react';

const services = [
  { t: 'จดทะเบียนจัดตั้งบริษัท', p: '฿6,900', items: 'จองชื่อ · ข้อบังคับ · ยื่น บจ. + เลขภาษี · ตราประทับ' },
  { t: 'เปลี่ยนชื่อบริษัท', p: '฿3,500', items: 'ตรวจ-จองชื่อใหม่ · มติผู้ถือหุ้น · ยื่น บจ.' },
  { t: 'เปลี่ยนผู้กระทำการ / ทุน / ที่ตั้ง', p: '฿2,900', items: 'มติ + เอกสาร บจ. · ยื่นใน 3 วันทำการ · แจ้งสรรพากร' },
  { t: 'จำหน่าย / ปิดกิจการ', p: '฿7,500', items: 'มติพิเศษ · ประกาศเจ้าหนี้ · ยื่น บจ.3' },
];
const steps = [
  ['ทักหาพี่กิ้ก', 'เล่าเรื่องที่จะทำผ่าน LINE รับเช็กลิสต์ไปกรอก ใช้เวลาไม่ถึง 15 นาที'],
  ['พี่กิ้กยื่นให้', 'เช็กเอกสาร ทำแบบฟอร์ม ยื่น พบ. ให้ถูกต้อง อัปเดตทุกสถานะ'],
  ['รับของถึงมือ', 'หนังสือรับรองส่งถึงทาง LINE และไปรษณีย์ ใช้ต่อได้ทันที'],
];
const faqs = [
  ['ตั้งบริษัทต้องเตรียมอะไร?', 'ชื่อบริษัท (มีสำรอง 2-3 ชื่อ), ที่อยู่สำนักงาน, ข้อมูลผู้ถือหุ้นและผู้กระทำการ — ทักมารับเช็กลิสต์ได้เลย'],
  ['ใช้เวลาเท่าไหร่?', 'ตั้งบริษัท 5-7 วันทำการ, เปลี่ยนชื่อ/ผู้กระทำการ 3-5 วันทำการ นับจากเอกสารครบ'],
  ['อยู่ต่างจังหวัดทำได้ไหม?', 'ได้ ทุกอย่างทำผ่าน LINE และไปรษณีย์ ไม่ต้องเดินทาง'],
];

function Fade({ children, className }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { rootMargin: '-60px' });
    io.observe(ref.current); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className} style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(26px)', transition: 'opacity .9s ease, transform .9s ease' }}>{children}</div>;
}

export default function Ghibli() {
  return (
    <main className="gh">
      {/* hero — the journey scene in a dark bezel, glass chips floating */}
      <section className="gh-hero">
        <header className="gh-nav">
          <span className="gh-logo"><img src="/assets/png-cut/logo-chibi.png" alt="" /> gik &amp; go</span>
          <nav><a href="#gh-services">บริการ</a><a href="#gh-steps">ขั้นตอน</a><a href="#gh-faq">คำถาม</a></nav>
        </header>
        <div className="gh-screen">
          <img className="gh-scene" src="/assets/png/step2-file.png" alt="พี่กิ้กทำงานยื่นจดทะเบียน" />
          {/* white pill CTA top-center like the ref */}
          <a className="gh-explore" href="#gh-services">เริ่มส่งเรื่องเลย</a>
          {/* glass stat chips, left */}
          <div className="gh-stats">
            <div className="gh-chip"><b>3 วัน</b><span>ยื่นเร็วหลังเอกสารครบ</span></div>
            <div className="gh-chip"><b>100%</b><span>ราคาเหมาจ่าย ไม่บวกเพิ่ม</span></div>
            <div className="gh-chip"><b>LINE</b><span>ช่องทางเดียว จบทุกเรื่อง</span></div>
          </div>
          {/* glass story card, right */}
          <div className="gh-card">
            <h1>พี่กิ้กจัดการให้ — เรื่องทะเบียนบริษัท จบในที่เดียว</h1>
            <p>ส่งเรื่องผ่าน LINE แล้วไปทำเรื่องสำคัญของคุณต่อได้เลย ตั้งบริษัท เปลี่ยนชื่อ ปิดกิจการ — พี่กิ้กดูแลให้ถึงจบ</p>
            <a href="#gh-services">ดูบริการและราคา</a>
          </div>
        </div>
        <div className="gh-halo" aria-hidden />
      </section>

      {/* airy white storytelling */}
      <section className="gh-intro">
        <Fade><p className="gh-serif">สวัสดีค่ะ พี่กิ้กเอง 👋</p></Fade>
        <Fade delay={.1}>
          <p className="gh-big">
            งานทะเบียนบริษัทไม่ต้องน่ากลัว ไม่ต้องเสียเวลาเดินทาง และไม่ควรแพงเกินจริง —
            พี่กิ้กทำมันให้ทุกวัน จนคล่องจนเล่าให้ฟังได้ทุกขั้นตอน
          </p>
        </Fade>
      </section>

      {/* services */}
      <section id="gh-services" className="gh-sec">
        <Fade><p className="gh-label">บริการ — ราคาเหมาจ่าย <span>(ตัวเลขตัวอย่าง ยืนยันก่อนเปิดใช้)</span></p></Fade>
        {services.map((s) => (
          <Fade key={s.t} className="gh-item">
            <span className="gh-item-t">{s.t}</span>
            <span className="gh-item-d">{s.items}</span>
            <span className="gh-item-p">{s.p}</span>
          </Fade>
        ))}
        <Fade><p className="gh-note">ทุกราคารวมค่าธรรมเนียมราชการแล้ว — จ่ายครั้งเดียวจบเรื่อง</p></Fade>
      </section>

      {/* steps */}
      <section id="gh-steps" className="gh-sec gh-tint">
        <Fade><p className="gh-label">3 ขั้นตอน ง่ายเหมือนเล่าเรื่อง</p></Fade>
        <div className="gh-steps">
          {steps.map(([t, d], i) => (
            <Fade key={t} className="gh-step">
              <span className="gh-step-n">{i + 1}</span><h3>{t}</h3><p>{d}</p>
            </Fade>
          ))}
        </div>
      </section>

      {/* art band */}
      <div className="gh-band">
        <img src="/assets/png/step3-docs.png" alt="" />
        <p className="gh-serif">"ผ่าน" — คำที่พี่กิ้กชอบที่สุด</p>
      </div>

      {/* faq */}
      <section id="gh-faq" className="gh-sec">
        <Fade><p className="gh-label">คำถามที่พบบ่อย</p></Fade>
        {faqs.map(([q, a], i) => (
          <details key={q} className="gh-faq" open={i === 0}><summary>{q}</summary><p>{a}</p></details>
        ))}
      </section>

      {/* contact */}
      <section className="gh-contact">
        <div className="gh-contact-grid">
          <img src="/assets/png-cut/about-gik.png" alt="" />
          <div>
            <h2 className="gh-serif">มีเรื่องให้พี่ช่วยไหมคะ?</h2>
            <p className="gh-contact-sub">ทัก LINE มาคุยกับพี่กิ้กได้เลย — ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
            <a className="gh-cta" href="#">ทัก LINE: @gikngo</a>
          </div>
        </div>
        <p className="gh-meta">© 2026 gik &amp; go — จันทร์–เสาร์ 09:00–18:00 — โทร 0X-XXX-XXXX</p>
      </section>
    </main>
  );
}
