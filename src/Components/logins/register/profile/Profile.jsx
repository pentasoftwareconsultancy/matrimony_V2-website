import React, { useEffect } from "react";
import styles from "./Profile.module.css";

const Profile = ({ formData, setFormData, setIsFormValid }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      profile: {
        ...formData.profile,
        [name]: value,
      },
    });
  };

  // Validate if all required fields are filled
  const validateForm = () => {
    const { fullName, email, mobile, password, dob, city, gender } = formData.profile;
    const isValid = fullName && email && mobile && password && dob && city && gender;
    setIsFormValid(isValid); // Set the form validity in parent component
  };

  // Validate the form when formData changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.title}>REGISTRATION</h2>
        <p className={styles.subtitle}>
          You are just four steps away from contacting 1000's of profiles!
        </p>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Full Name*</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.profile.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.profile.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Mobile Number*</label>
            <input
              type="tel"
              name="mobile"
              placeholder="Phone Number"
              value={formData.profile.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Password* (minimum 6 length required)</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.profile.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Date of Birth*</label>
            <input
              type="date"
              name="dob"
              value={formData.profile.dob}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>City*</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              value={formData.profile.city}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            <label>Gender*</label>
            <select
              name="gender"
              value={formData.profile.gender}
              onChange={handleInputChange}
            >
              <option>-- Please Select --</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
