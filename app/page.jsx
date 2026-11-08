export default function Home() {
  return (
    <>


<header>
  <div className="nav">
    <div className="logo"><img src="/assets/png-cut/logo-chibi.png" alt="โลโก้ Gik and Go" /> Gik &amp; Go</div>
    <div>
      <nav style={{display:'inline'}}>
        <a href="#services">บริการ</a><a href="#how">ขั้นตอน</a><a href="#why">ทำไมต้องเรา</a><a href="#faq">คำถามที่พบบ่อย</a>
      </nav>
      <a className="btn" style={{marginLeft:18}} href="#contact">ทัก LINE</a>
    </div>
  </div>
</header>

{/* ═══════ HERO ═══════ */}
<div className="hero">
  <div className="wrap">
    <div>
      <h1>พี่กิ้ก<br />จัดการ<span className="accent">ทะเบียนบริษัท</span><br />ให้ครบ จบในที่เดียว</h1>
      <p className="sub">บริษัทจดทะเบียน / งาน พบ. ตั้งบริษัท เปลี่ยนชื่อ เปลี่ยนผู้กระทำการ ปิดกิจการ · ราคาเหมาจ่าย ไม่ต้องเดินทาง ส่งเรื่องผ่าน LINE ได้เลย <span className="en">Company registration &amp; DBD filings · fixed prices, all handled over LINE.</span></p>
      <ul className="checks">
        <li>ปรึกษาฟรี ไม่มีค่าใช้จ่าย</li>
        <li>ราคาเหมาจ่าย ชัดเจนตั้งแต่ต้น</li>
        <li>ดำเนินการให้ครบวงจร ไม่เสียเวลาเดินทาง</li>
      </ul>
      <a className="btn" href="#contact">ทัก LINE เลย →</a>
    </div>
    <div className="hero-art">
      <img src="/assets/png-cut/about-gik.png" alt="พี่กิ้ก มาสคอตของ Gik and Go · ยิ้มเป็นมิตรถือบัตรพนักงาน" />
      <div className="chat" aria-hidden="true">
        <div className="chat-head">
          <img src="/assets/png-cut/logo-chibi.png" alt="" />
          <div><b>Gik &amp; Go</b><span>ทักหาได้เลยจ้า</span></div>
        </div>
        <div className="msgs">
          <div className="m u">อยากเปลี่ยนชื่อบริษัทครับ</div>
          <div className="m g"><b>พี่กิ้ก:</b> ง่ายจ้ะ ส่งหนังสือนนท. กับชื่อใหม่ที่คิดไว้มาให้พี่ได้เลย 💪</div>
          <div className="m g">ราคา ฿3,500 เอง จบใน 3–5 วันทำการ</div>
        </div>
        <div className="quick"><span>ยื่นจดทะเบียน</span><span>ราคาทำไหม่?</span><span>ใช้อะไรบ้าง?</span></div>
        <div className="prog">กำลังดำเนินการ… <b>72%</b><div className="bar"><i></i></div></div>
      </div>
    </div>
  </div>
</div>

{/* ═══════ SERVICES ═══════ */}
<section id="services" className="alt">
  <div className="wrap">
    <h2>บริษัทของเรามีทุกบริการ <span className="en">(ราคาจริง)</span></h2>
    <p className="sec-sub">ราคานี้คือราคาจริง ไม่มีบวกเพิ่ม <span className="en">All-in fixed prices.</span> (ตัวเลขในตัวอย่าง · ยืนยันราคาจริงก่อนเปิดใช้)</p>
    <div className="cards">
      <div className="card featured">
        <span className="tag">ฮิตสุด</span>
        <h3>จดทะเบียนจัดตั้งบริษัท</h3>
        <div className="price">฿6,900 <small>/เรื่อง</small></div>
        <ul><li>จองชื่อนิติบุคคล</li><li>จัดทำข้อบังคับทั้งหมด</li><li>ยื่น บจ. + เลขผู้เสียภาษี</li><li>ตราประทับบริษัท</li></ul>
      </div>
      <div className="card">
        <h3>เปลี่ยนชื่อบริษัท</h3>
        <div className="price">฿3,500 <small>/เรื่อง</small></div>
        <ul><li>ตรวจ-จองชื่อใหม่</li><li>มติผู้ถือหุ้น</li><li>ยื่น บจ. แก้ไขทะเบียน</li></ul>
      </div>
      <div className="card">
        <h3>เปลี่ยนผู้กระทำการ / ทุน / ที่ตั้ง</h3>
        <div className="price">฿2,900 <small>/เรื่อง</small></div>
        <ul><li>เตรียมมติ + เอกสาร บจ.</li><li>ยื่นภายใน 3 วันทำการ</li><li>แจ้งกรมสรรพากร</li></ul>
      </div>
      <div className="card">
        <h3>จำหน่าย / ปิดกิจการ</h3>
        <div className="price">฿7,500 <small>เริ่มต้น</small></div>
        <ul><li>มติพิเศษ</li><li>ติดประกาศเจ้าหนี้</li><li>ยื่น บจ.3 คืนทะเบียน</li></ul>
      </div>
    </div>
  </div>
</section>

{/* ═══════ STEPS ═══════ */}
<section id="how">
  <div className="wrap">
    <h2>ง่ายแค่ 3 ขั้นตอน</h2>
    <p className="sec-sub">คุณแค่ส่งข้อมูล ที่เหลือพี่กิ้กจัดการเอง <span className="en">You send the info · Gik does the rest.</span></p>
    <div className="steps">
      <div className="step">
        <img src="/assets/png/step1-line.png" alt="ทัก LINE ส่งข้อมูล" />
        <h3>ทัก LINE ส่งข้อมูล</h3>
        <p>บอกว่าจะทำเรื่องอะไร พี่กิ้กส่งเช็กลิสต์มาให้กรอก ใช้เวลาไม่ถึง 15 นาที</p>
      </div>
      <div className="step">
        <img src="/assets/png/step2-file.png" alt="พี่กิ้กยื่นจดทะเบียนให้" />
        <h3>พี่กิ้กยื่นให้</h3>
        <p>ตรวจเอกสาร จัดทำแบบฟอร์ม และยื่นจดทะเบียนกับ พบ. ให้ถูกต้อง พร้อมอัปเดตสถานะทุกขั้น</p>
      </div>
      <div className="step">
        <img src="/assets/png/step3-docs.png" alt="รับเอกสารจดทะเบียน" />
        <h3>รับเอกสารถึงมือ</h3>
        <p>หนังสือรับรองและเอกสารส่งถึงทาง LINE และไปรษณีย์ ใช้ต่อได้ทันที</p>
      </div>
    </div>
  </div>
</section>

{/* ═══════ WHY ═══════ */}
<section id="why" className="alt">
  <div className="wrap">
    <h2>ทำไมต้อง Gik &amp; Go</h2>
    <p className="sec-sub">ไม่ใช่สำนักงานกฎหมาย · แต่เราทำงานทะเบียนได้แม่นกว่า <span className="en">Not a law firm · sharper at filings.</span></p>
    <div className="why">
      <div className="item"><h3>⚡ รวดเร็ว</h3><p>ยื่นภายใน 3 วันทำการหลังเอกสารครบ</p></div>
      <div className="item"><h3>🛡️ เชื่อถือได้</h3><p>ทีมชำนาญงาน พบ. เช็กซ้ำก่อนยื่นทุกครั้ง</p></div>
      <div className="item"><h3>🏷️ ราคาเหมาจ่าย</h3><p>ประกาศราคาบนเว็บ ไม่มีค่าใช้จ่ายแอบแฝง</p></div>
      <div className="item"><h3>🎧 คุยง่าย ดูแลถึงจบ</h3><p>คุยผ่าน LINE ได้ตลอดชั่วโมงทำการ ไม่ต้องเดินทาง</p></div>
    </div>
    <div className="guarantee"><span className="em">🛡️</span><span>รับประกัน: เอกสารไม่ผ่านการพิจารณา → พี่กิ้กแก้ไขและยื่นใหม่ให้ <u>ฟรี</u> จนกว่าจะผ่าน</span></div>
  </div>
</section>

{/* ═══════ FAQ ═══════ */}
<section id="faq">
  <div className="wrap">
    <h2>คำถามที่พบบ่อย</h2>
    <p className="sec-sub en">FAQ</p>
    <details open><summary>ตั้งบริษัทต้องใช้เอกสารอะไรบ้าง?</summary><p>ชื่อบริษัทที่ต้องการ (มี 2-3 ชื่อสำรอง), ที่อยู่สำนักงาน, ข้อมูลผู้ถือหุ้นและผู้กระทำการ · ทัก LINE มาแล้วพี่กิ้กส่งเช็กลิสต์ให้เตรียมได้เลย</p></details>
    <details><summary>ใช้เวลานานแค่ไหน?</summary><p>ตั้งบริษัท 5-7 วันทำการ, เปลี่ยนชื่อ/ผู้กระทำการ 3-5 วันทำการ นับจากวันเอกสารครบ</p></details>
    <details><summary>Gik &amp; Go เป็นสำนักงานกฎหมายหรือเปล่า?</summary><p>เราเป็นทีมชำนาญงานจดทะเบียนกับ พบ. โดยเฉพาะ งานทะเบียนเป็นงานเอกสารมาตรฐานชัดเจน เราจึงทำได้ถูกต้องและราคาถูกกว่า</p></details>
    <details><summary>อยู่ต่างจังหวัดทำได้ไหม?</summary><p>ได้ ทุกอย่างทำผ่าน LINE และไปรษณีย์ได้หมด ไม่ต้องเดินทางมากรุงเทพฯ</p></details>
  </div>
</section>

{/* ═══════ FOOTER CTA ═══════ */}
<footer id="contact">
  <div className="foot-cta">
    <div className="wrap">
      <div>
        <h2>เบื่อเรื่องเอกสารที่ต้องคอย?</h2>
        <p>ทักพี่กิ้กมา LINE ได้เลย · ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        <a className="btn" href="https://line.me/R/ti/p/@gikngo">ทัก LINE: @gikngo</a>
      </div>
      <img className="art" src="/assets/png-cut/hero-approved.png" alt="พี่กิ้ก ชูสติกเตอร์ approved" />
    </div>
  </div>
  <div className="foot-bottom">
    <div className="wrap">
      <div><b style={{color:'#fff'}}>Gik &amp; Go (กิ้ก แอนด์ โก)</b> · โทร 0X-XXX-XXXX · จันทร์–เสาร์ 09:00–18:00</div>
      <div>© 2026 Gik &amp; Go</div>
    </div>
  </div>
</footer>


    </>
  );
}
