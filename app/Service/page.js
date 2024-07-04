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
            Service
          </h2>
          
          <p style={{ color: '#666' }}>
            บริการที่เรามี:
            <br /><br />
            "เราให้บริการคำแนะนำและเทคนิคการปลูกพืชที่ทันสมัยเพื่อช่วยให้สวนของคุณเติบโตได้"
            <br /><br />
            "บริการปรับแต่งการดูแลนักร้องให้เข้ากับความต้องการของสวนทุกประเภท"
            <br /><br />

          </p>
          <a href="#" className="btn btn-success">
            ช่วยเหลือ
          </a>
          <p>
            "ใช้เทคนิคการร้องเพื่อเพิ่มประสิทธิภาพ"
            <br />
            "การปรับใช้เทคโนโลยีเพื่อช่วยให้ได้ผลที่ดีที่สุด"
            <br /><br />
            
          </p>
          <a href="#" className="btn btn-success">
            ช่วยเหลือ
          </a>
          <p>
            "การปรับใช้เทคนิคการดูแลนักร้อง"
            <br />
            "บริการดูแลนักร้องที่มีความเชี่ยวชาญ"
            <br /><br />
            การสนับสนุนและบริการลูกค้า:
          </p>
          <a href="#" className="btn btn-success">
            ช่วยเหลือ
          </a>
          <p>
            "การพัฒนาและการสนับสนุนการปลูกพืชที่ตอบสนองต่อความต้องการ"
            <br />
            "บริการลูกค้าที่มุ่งเน้นความพึงพอใจและประสิทธิภาพ"
          </p>
          <a href="#" className="btn btn-success">
            ใช้งาน
          </a>
         
        </div>
      </div>
      <br />
    </>
  );
}