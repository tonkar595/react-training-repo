// AddUserPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddUserPage.css";

const AddUserPage = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    email: "",
    address: "",
    phone: ""
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      point: "",
      phone: ""
    };
    
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "กรุณากรอกชื่อ";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "กรุณากรอกนามสกุล";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "กรุณากรอกอีเมล";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
      isValid = false;
    }

    if (!formData.point.trim()) {
      newErrors.point = "กรุณากรอกคะแนน";
      isValid = false;
    } else if (!/^[0-9]+$/.test(formData.point)) {
      newErrors.point = "กรุณากรอกตัวเลขเท่านั้น";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
      isValid = false;
    } else if (!/^[0-9-+()]*$/.test(formData.phone)) {
      newErrors.phone = "รูปแบบเบอร์โทรไม่ถูกต้อง";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send data to your API
      console.log("Form submitted:", formData);
      
      // Show success message
      alert("เพิ่มผู้ใช้สำเร็จ!");
      
      // Navigate back to user list
      navigate("/user");
    }
  };

  const handleCancel = () => {
    navigate("/user");
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1>เพิ่มผู้ใช้ใหม่</h1>
        
        <form onSubmit={handleSubmit} className="user-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">
                ชื่อ <span className="required">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error" : ""}
                placeholder="กรอกชื่อ"
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                นามสกุล <span className="required">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error" : ""}
                placeholder="กรอกนามสกุล"
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="nickname">ชื่อเล่น</label>
            <input
              type="text"
              id="nickname"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="กรอกชื่อเล่น"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              อีเมล <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              placeholder="example@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="point">
              คะแนน <span className="required">*</span>
            </label>
            <input
              type="number"
              id="point"
              name="point"
              value={formData.point}
              onChange={handleChange}
              className={errors.point ? "error" : ""}
              placeholder="กรอกคะแนน"
              min="0"
            />
            {errors.point && <span className="error-message">{errors.point}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              เบอร์โทรศัพท์ <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
              placeholder="0812345678"
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={handleCancel}>
              ยกเลิก
            </button>
            <button type="submit" className="btn btn-submit">
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserPage;