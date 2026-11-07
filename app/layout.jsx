import "./globals.css";

export const metadata = {
  title: "Gik & Go — พี่กิ้กจัดการให้ | จดทะเบียนบริษัท ง่ายเหมือนมีพี่สาวดูแล",
  description:
    "ตั้งบริษัท เปลี่ยนชื่อบริษัท เปลี่ยนผู้กระทำการ ปิดกิจการ — ราคาเหมาจ่ายชัดเจน ทำงานกับ พบ. ให้ครบ ส่งเรื่องผ่าน LINE",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
