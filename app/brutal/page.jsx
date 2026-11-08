'use client';

import { useEffect, useState } from 'react';
import './brutal.css';

const services = [
  { t: 'จดทะเบียนจัดตั้งบริษัท', p: '฿6,900', hot: true, items: ['จองชื่อนิติบุคคล', 'จัดทำข้อบังคับทั้งหมด', 'ยื่น บจ. + เลขผู้เสียภาษี', 'ตราประทับบริษัท'] },
  { t: 'เปลี่ยนชื่อบริษัท', p: '฿3,500', items: ['ตรวจ-จองชื่อใหม่', 'มติผู้ถือหุ้น', 'ยื่น บจ. แก้ไขทะเบียน'] },
  { t: 'เปลี่ยนผู้กระทำการ ทุน ที่ตั้ง', p: '฿2,900', items: ['เตรียมมติ + เอกสาร บจ.', 'ยื่นภายใน 3 วันทำการ', 'แจ้งกรมสรรพากร'] },
  { t: 'จำหน่าย / ปิดกิจการ', p: '฿7,500', items: ['มติพิเศษ', 'ติดประกาศเจ้าหนี้', 'ยื่น บจ.3 คืนทะเบียน'] },
];
const steps = [
  { n: '01', t: 'ทัก LINE ส่งข้อมูล', d: 'บอกว่าจะทำเรื่องอะไร พี่กิ้กส่งเช็กลิสต์มาให้กรอก ใช้เวลาไม่ถึง 15 นาที', img: '/assets/png/step1-line.png' },
  { n: '02', t: 'พี่กิ้กยื่นให้', d: 'ตรวจเอกสาร จัดทำแบบฟอร์ม ยื่นจดทะเบียนกับ พบ. ให้ถูกต้อง อัปเดตสถานะทุกขั้น', img: '/assets/png/step2-file.png' },
  { n: '03', t: 'รับเอกสารถึงมือ', d: 'หนังสือรับรองและเอกสารส่งถึงทาง LINE และไปรษณีย์ ใช้ต่อได้ทันที', img: '/assets/png/step3-docs.png' },
];
const faqs = [
  ['ตั้งบริษัทต้องใช้เอกสารอะไรบ้าง?', 'ชื่อบริษัท (มี 2-3 ชื่อสำรอง), ที่อยู่สำนักงาน, ข้อมูลผู้ถือหุ้นและผู้กระทำการ — ทัก LINE รับเช็กลิสต์ได้เลย'],
  ['ใช้เวลานานแค่ไหน?', 'ตั้งบริษัท 5-7 วันทำการ, เปลี่ยนชื่อ/ผู้กระทำการ 3-5 วันทำการ นับจากวันที่เอกสารครบ'],
  ['Gik & Go เป็นสำนักงานกฎหมายหรือเปล่า?', 'เราเป็นทีมชำนาญงาน พบ. โดยเฉพาะ — งานทะเบียนเป็นงานเอกสารมาตรฐานชัดเจน เราจึงทำได้ถูกต้องและราคาถูกกว่า'],
  ['อยู่ต่างจังหวัดทำได้ไหม?', 'ได้ ทุกอย่างทำผ่าน LINE และไปรษณีย์ ไม่ต้องเดินทางมากรุงเทพฯ'],
];

export default function Brutal() {
  const [tick, setTick] = useState(0);
  useEffect(() => { const i = setInterval(() => setTick(t => t + 1), 4000); return () => clearInterval(i); }, []);
  return (
    <main className="bz">
      {/* top bar */}
      <header className="bz-bar">
        <span className="bz-logo"><img src="/assets/png-cut/logo-chibi.png" alt="" /> GIK &amp; GO</span>
        <nav>
          <a href="#bz-services">บริการ/ราคา</a>
          <a href="#bz-how">ขั้นตอน</a>
          <a href="#bz-faq">คำถาม</a>
          <a href="#bz-contact" className="bz-nav-cta">ทัก LINE ↗</a>
        </nav>
      </header>

      {/* marquee ticker */}
      <div className="bz-ticker" aria-hidden>
        <div className="bz-ticker-track">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>จดทะเบียนบริษัท ● เปลี่ยนชื่อ ● เปลี่ยนผู้กระทำการ ● ปิดกิจการ ● ราคาเหมาจ่าย ● ไม่มีบวกเพิ่ม ●&nbsp;</span>
          ))}
        </div>
      </div>

      {/* hero */}
      <section className="bz-hero">
        <div className="bz-hero-copy">
          <p className="bz-kicker">จดทะเบียนนิติบุคคล / งาน พบ. / ราคาชัดเจน</p>
          <h1 className="bz-h1">
            พี่กิ้ก<br />จัดการ<br /><span className="bz-red">ทะเบียน<br />บริษัท</span>
          </h1>
          <p className="bz-sub">
            ตั้งบริษัท เปลี่ยนชื่อ เปลี่ยนผู้กระทำการ ปิดกิจการ — ส่งเรื่องผ่าน LINE
            แล้วไปทำเรื่องสำคัญของคุณต่อได้เลย <span className="bz-en">Hand it to Gik, and go.</span>
          </p>
          <div className="bz-cta-row">
            <a className="bz-btn" href="#bz-contact">ทัก LINE ปรึกษาฟรี ↗</a>
            <a className="bz-btn bz-btn-ghost" href="#bz-services">ดูราคา ↓</a>
          </div>
        </div>
        <figure className="bz-poster">
          <img src="/assets/png-cut/about-gik.png" alt="พี่กิ้ก มาสคอตของ Gik and Go" />
          <figcaption className="bz-bubble">
            <span>เรื่องพวกนี้ พี่จัดการเอง เชื่อดิ้!</span>
          </figcaption>
          <span className="bz-poster-stamp">GIK &amp; GO ✕ ผ่าน</span>
        </figure>
      </section>

      {/* prices as stark table */}
      <section id="bz-services" className="bz-section">
        <h2 className="bz-h2">บริการ — ราคาเหมาจ่าย <span className="bz-red">*</span>ตัวเลขตัวอย่าง ยืนยันก่อนเปิดใช้</h2>
        <div className="bz-table">
          {services.map((s) => (
            <a key={s.t} className={'bz-row' + (s.hot ? ' hot' : '')} href="#bz-contact">
              <span className="bz-row-t">{s.t}{s.hot && <em className="bz-hot">HOT</em>}</span>
              <span className="bz-row-items">{s.items.join(' · ')}</span>
              <span className="bz-row-p">{s.p}<small> รวมทุกอย่าง</small></span>
              <span className="bz-row-arrow">↗</span>
            </a>
          ))}
        </div>
        <p className="bz-table-note">ทุกราคารวมค่าธรรมเนียมราชการ — จ่ายครั้งเดียวจบเรื่อง</p>
      </section>

      {/* steps */}
      <section id="bz-how" className="bz-section bz-inverse">
        <h2 className="bz-h2">ง่ายแค่ 3 ขั้นตอน</h2>
        <div className="bz-steps">
          {steps.map((s) => (
            <article key={s.n} className="bz-step">
              <div className="bz-step-head"><span className="bz-step-n">{s.n}</span><h3>{s.t}</h3></div>
              <img src={s.img} alt={s.t} />
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* why strip */}
      <section className="bz-why">
        <div>รวดเร็ว<span>ยื่นภายใน 3 วันทำการ</span></div>
        <div>เชื่อถือได้<span>เช็กเอกสารซ้ำก่อนยื่นทุกครั้ง</span></div>
        <div>ราคาเหมาจ่าย<span>ไม่มีค่าใช้จ่ายแอบแฝง</span></div>
        <div>คุยง่าย<span>LINE ตลอดชั่วโมงทำการ</span></div>
      </section>
      <div className="bz-guarantee">🛡️ เอกสารไม่ผ่านการพิจารณา → พี่กิ้กแก้ไขและยื่นใหม่ให้ฟรี จนกว่าจะผ่าน</div>

      {/* faq */}
      <section id="bz-faq" className="bz-section">
        <h2 className="bz-h2">คำถามที่พบบ่อย</h2>
        {faqs.map(([q, a], i) => (
          <details key={q} className="bz-faq" open={i === 0}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>

      {/* footer */}
      <footer id="bz-contact" className="bz-foot">
        <h2 className="bz-h1 bz-foot-h">พร้อมหรือยัง?<br /><span className="bz-red">ทักมาเลย</span></h2>
        <a className="bz-btn bz-btn-big" href="#">ทัก LINE: @gikngo ↗</a>
        <div className="bz-foot-meta">© 2026 GIK &amp; GO (กิ้ก แอนด์ โก) — โทร 0X-XXX-XXXX — จันทร์–เสาร์ 09:00–18:00</div>
      </footer>
    </main>
  );
}
