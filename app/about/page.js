import Navbar from '/app/component/nav';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className="col-lg-6 mx-auto about"
          style={{
            backgroundColor: '#ffffff', // พื้นหลังสีขาว
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 className="text-center mb-4" style={{ color: '#333' }}>
            About
          </h2>
          <img
            src="N1.jpg"
            alt="รูปภาพของพืช"
            className="img-fluid profile-pic mb-4"
            style={{
              border: '2px solid #ddd', // สีขอบรูปภาพ
              padding: '5px',
              borderRadius: '10px',
            }}
          />
          
          <p style={{ color: '#666' }}>
          จัสติน ดรูว์ บีเบอร์ เป็นนักร้องและนักแต่งเพลงชาวแคนาดา เมื่อเขาอายุ 13 ปี ได้เซ็นสัญญากับ RBMG Records ในปี 2008 หลังจากที่ผู้จัดการบริษัทได้ดูวิดีโอเพลงคัฟเวอร์บนยูทูบของเขา ปลายปี 2009 อีพี มายเวิลด์ ถูกเปิดตัว โดยบีเบอร์กลายเป็นศิลปินคนแรกที่มีเพลงถึง 7 เพลงจากอัลบั้มเปิดตัวในชาร์ตบิลบอร์ดฮอต
          </p>
          
        </div>
      </div>
      <br />
    </>
  );
}