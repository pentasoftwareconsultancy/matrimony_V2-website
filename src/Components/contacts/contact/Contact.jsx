import React, { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isVerified) {
      alert("Please verify you are not a robot!");
      return;
    }
    console.log("Form Data Submitted: ", formData);
  };

  const handleRecaptcha = () => {
    setIsVerified(true);
  };

  return (
    <div className={styles.contactForm}>
      <h2>Contact Us</h2>
      <div className={styles.main}>
        <div className={styles.contaner1}>
          <div className={styles.contanermain}>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name*
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your Email*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number*
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Subject*
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message (optional)
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        {/* <div className={styles.recaptcha}>
          <input
            type="checkbox"
            id="recaptcha"
            onChange={handleRecaptcha}
          />
          <label htmlFor="recaptcha">I'm not a robot</label>
        </div>

        <button type="submit">Send Message</button> */}
      </form>
     </div>
     <div className={styles.inputmain}>
      <div className={styles.recaptcha}>
          <input
            type="checkbox"
            id="recaptcha"
            onChange={handleRecaptcha}
          />
          <div className={styles.robot}>I'm not a robot</div>
        </div>

        <button type="submit">Send Message</button>
        </div>
</div>
<div className={styles.contaner2}>
      <div className={styles.contactInfo}>
        <h3 className={styles.contact}> Information</h3>
        <p className={styles.add}><b>Address:</b> Plot No. 14, Sahavidyanagar Co-operative Hsg. Society, Baner Road, Pune 411045</p>
        <p className={styles.mobile}><b>Mobile Numbers:</b></p>
        <p className={styles.number }>+91-9822055033</p>
        <p>+91-9359224017‬</p>
        <p className={styles.emain}><b>Email:</b> lagnagath13@gmail.com</p>
        <p className={styles.time}><b>Office Timings:</b> 11AM to 6PM, 9:30PM to 10PM</p>
        <p className={styles.sunday}><b>Sunday:</b> Holiday</p>
      </div>
      </div>
      
      </div>
    </div>
  );
};

export default Contact;
