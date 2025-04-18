import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    site: '',
    size: 1,
    note: '',
  });

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try{
      const res=await axios.post(`http://localhost:8800/api/request/create`,formData);
      console.log(res.data?.message);
    }catch(err){
        console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className="pt-5 " style={{ scrollBehavior: 'smooth' ,backgroundImage:`url(/assets/img/photo-1643350124916-d00c9b9f7a39.jpeg)`}} >
      {/* Hero Section */}
      <section className="py-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 className="display-4 fw-bold mb-3" style={{color:"#B0915D"}}>طلب تقييم عقاري</h1>
          <p className="lead text-white ">
            قم بتعبئة النموذج أدناه لطلب خدمة التقييم العقاري
          </p>
        </motion.div>
      </section>
      
      <section className=" py-5">
        <div className="container d-flex justify-content-center align-items-center flex-column">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-100 p-4 p-md-5 rounded-4 shadow"
            style={{
              maxWidth: '800px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid var(--primary)',
            }}
          >
            <form onSubmit={handleSubmit} className="row g-4 requestForm">                            
              <div className="col-md-6">
                <label htmlFor="name" className="form-label text-secondary">الاسم الكامل</label>
                <input type="text" className="form-control text-dark" name="name" id="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label text-secondary">البريد الإلكتروني</label>
                <input type="email" className="form-control" name="email" id="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label text-secondary">رقم الهاتف</label>
                <input type="text" className="form-control text-dark" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
              </div>             
              <div className="col-md-6">
                <label htmlFor="propertyType" className="form-label text-secondary">نوع العقار</label>
                <select className="form-select" name="propertyType" id="propertyType">
                  <option value="">اختر نوع العقار</option>
                  <option value="فيلا">فيلا</option>
                  <option value="شقة">شقة</option>
                  <option value="أرض">أرض</option>
                  <option value="مبنى تجاري">مبنى تجاري</option>
                  <option value="مستودع">مستودع</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="site" className="form-label text-secondary">موقع العقار</label>
                <input type="text" className="form-control text-dark" name="site" id="site" value={formData.site} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="size" className="form-label text-secondary">مساحة العقار (م²)</label>
                <input type="number" className="form-control text-dark" name="size" id="size" value={formData.size} onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label htmlFor="purpose" className="form-label text-secondary">الغرض من التقييم</label>
                <select className="form-select" name="purpose" id="purpose" >
                  <option value="">اختر الغرض</option>
                  <option value="بيع">بيع</option>
                  <option value="شراء">شراء</option>
                  <option value="رهن">رهن</option>
                  <option value="تقسيم">تقسيم</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="preferredDate" className="form-label text-secondary">التاريخ المفضل للزيارة</label>
                <input type="date" className="form-control text-dark" name="preferredDate" id="preferredDate"/>
              </div>

              <div className="col-12">
                <label htmlFor="note" className="form-label text-secondary">ملاحظات إضافية</label>
                <textarea
                  className="form-control text-dark"
                  rows="4"
                  name="note"
                  id="note"                
                  value={formData.note}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className="col-12 text-center mt-4">
                <button type="submit" className="btn btn-primary px-5 py-2 fs-5">
                  إرسال الطلب
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default RequestForm;