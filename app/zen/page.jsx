'use client';

import "./zen.css";

import { useEffect, useRef, useState } from 'react';

const services = [
  { t: 'จดทะเบียนจัดตั้งบริษัท', p: '฿6,900', hot: true, items: 'จองชื่อ · ข้อบังคับ · ยื่น บจ. + เลขภาษี · ตราประทับ' },
  { t: 'เปลี่ยนชื่อบริษัท', p: '฿3,500', items: 'ตรวจ-จองชื่อใหม่ · มติผู้ถือหุ้น · ยื่น บจ.' },
  { t: 'เปลี่ยนผู้กระทำการ / ทุน / ที่ตั้ง', p: '฿2,900', items: 'มติ + เอกสาร บจ. · ยื่นใน 3 วันทำการ · แจ้งสรรพากร' },
  { t: 'จำหน่าย / ปิดกิจการ', p: '฿7,500', items: 'มติพิเศษ · ประกาศเจ้าหนี้ · ยื่น บจ.3' },
];
const steps = [
  ['ทักหาพี่กิ้ก', 'เล่าเรื่องที่จะทำผ่าน LINE รับเช็กลิสต์ไปกรอก — ไม่ถึง 15 นาที'],
  ['พี่กิ้กยื่นให้', 'เช็กเอกสาร ทำแบบฟอร์ม ยื่น พบ. ให้ถูกต้อง อัปเดตทุกสถานะ'],
  ['รับของถึงมือ', 'หนังสือรับรองส่งถึงทาง LINE และไปรษณีย์ ใช้ได้ทันที'],
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
  return <div ref={ref} className={className} style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(24px)', transition: 'opacity .8s ease, transform .8s ease' }}>{children}</div>;
}

export default function Zen() {
  return (
    <main className="zn">
      <header className="zn-nav">
        <span className="zn-logo"><img src="/assets/png-cut/logo-chibi.png" alt="" /> gik &amp; go</span>
        <nav><a href="#zn-services">บริการ</a><a href="#zn-steps">ขั้นตอน</a><a href="#zn-faq">คำถาม</a>
          <a className="zn-line" href="#zn-contact">ทัก LINE</a></nav>
      </header>

      {/* hero — art breathes alone on the right, minimal type left */}
      <section className="zn-hero">
        <div className="zn-hero-copy">
          <p className="zn-hello">สวัสดีค่ะ พี่กิ้กเอง</p>
          <h1>เรื่องทะเบียนบริษัท<br />ให้พี่ดูแลเอง</h1>
          <p className="zn-sub">ตั้งบริษัท เปลี่ยนชื่อ ปิดกิจการ — ราคาเหมาจ่าย ทุกอย่างทำผ่าน LINE<br />
            <span>Hand it to Gik, and go.</span></p>
          <a className="zn-cta" href="#zn-services">ดูบริการ ↓</a>
        </div>
        <div className="zn-hero-art">
          <img src="/assets/png-cut/about-gik.png" alt="พี่กิ้ก" />
        </div>
      </section>

      {/* quiet guarantee line */}
      <div className="zn-strip">เอกสารไม่ผ่าน → แก้ใหม่ให้ฟรี จนกว่าจะผ่าน</div>

      {/* services — a calm list, not cards */}
      <section id="zn-services" className="zn-sec">
        <Fade><p className="zn-label">บริการ — ราคาเหมาจ่าย</p></Fade>
        {services.map((s, i) => (
          <Fade key={s.t} className={'zn-item' + (i === 0 ? ' first' : '')}>
            <span className="zn-item-t">{s.t}{s.hot && <em>ยอดนิยม</em>}</span>
            <span className="zn-item-d">{s.items}</span>
            <span className="zn-item-p">{s.p}</span>
          </Fade>
        ))}
        <p className="zn-note">ทุกราคารวมค่าธรรมเนียมราชการแล้ว — ตัวเลขตัวอย่าง ยืนยันก่อนเปิดใช้</p>
      </section>

      {/* steps — three quiet blocks */}
      <section id="zn-steps" className="zn-sec zn-sand">
        <Fade><p className="zn-label">ขั้นตอนง่ายๆ</p></Fade>
        <div className="zn-steps">
          {steps.map(([t, d], i) => (
            <Fade key={t} className="zn-step" >
              <span className="zn-step-n">{i + 1}</span>
              <h3>{t}</h3><p>{d}</p>
            </Fade>
          ))}
        </div>
      </section>

      {/* art interlude — full-width band */}
      <div className="zn-band">
        <img src="/assets/png/step3-docs.png" alt="" />
        <p>"ผ่าน" — คำที่พี่กิ้กชอบที่สุด</p>
      </div>

      {/* faq */}
      <section id="zn-faq" className="zn-sec">
        <Fade><p className="zn-label">คำถามที่พบบ่อย</p></Fade>
        {faqs.map(([q, a], i) => (
          <details key={q} className="zn-faq" open={i === 0}>
            <summary>{q}</summary><p>{a}</p>
          </details>
        ))}
      </section>

      {/* contact */}
      <section id="zn-contact" className="zn-contact">
        <img src="/assets/png-cut/hero-approved.png" alt="" />
        <div>
          <h2>มีเรื่องให้พี่ช่วยไหมคะ?</h2>
          <a className="zn-cta zn-cta-solid" href="#">ทัก LINE: @gikngo</a>
          <p className="zn-meta">© 2026 gik &amp; go — จันทร์–เสาร์ 09:00–18:00 — โทร 0X-XXX-XXXX</p>
        </div>
      </section>
    </main>
  );
}
