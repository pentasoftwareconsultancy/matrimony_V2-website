import React, { useState } from "react";
import styles from "./Horoscope.module.css";

const Horoscope = () => {
  const [formData, setFormData] = useState({
    profilePhoto: "",
    panCardNumber: "",
    companyId: "",
    aadharPassportType: "Aadhar Card",
    aadharNumber: "",
    aadharPhoto: "",
    facebookLink: "",
    instagramLink: "",
    linkedinLink: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Profile Photo */}
      <div className={styles.fieldGroup}>
        <label>Profile Photo*</label>
        <input
          type="file"
          name="profilePhoto"
          onChange={handleFileChange}
          className={styles.inputFile}
        />
        <span>{formData.profilePhoto ? formData.profilePhoto.name : "No file chosen"}</span>
      </div>

      {/* PAN Card Number */}
      <div className={styles.fieldGroup}>
        <label>PAN Card Number</label>
        <input
          type="text"
          name="panCardNumber"
          value={formData.panCardNumber}
          onChange={handleInputChange}
          className={styles.inputText}
        />
      </div>

      {/* Company ID */}
      <div className={styles.fieldGroup}>
        <label>Company Id</label>
        <input
          type="file"
          name="companyId"
          onChange={handleFileChange}
          className={styles.inputFile}
        />
        <span>{formData.companyId ? formData.companyId.name : "No file chosen"}</span>
      </div>

      {/* Aadhar/Passport Details */}
      <div className={styles.fieldGroup}>
        <label>Aadhar/Passport Details*</label>
        <select
          name="aadharPassportType"
          value={formData.aadharPassportType}
          onChange={handleInputChange}
          className={styles.select}
        >
          <option value="Aadhar Card">Aadhar Card</option>
          <option value="Passport">Passport</option>
        </select>
      </div>

      {/* Aadhar Number */}
      <div className={styles.fieldGroup}>
        <label>Aadhar Number</label>
        <input
          type="text"
          name="aadharNumber"
          value={formData.aadharNumber}
          onChange={handleInputChange}
          className={styles.inputText}
        />
      </div>

      {/* Aadhar Card Photo */}
      <div className={styles.fieldGroup}>
        <label>Aadhar Card Photo*</label>
        <input
          type="file"
          name="aadharPhoto"
          onChange={handleFileChange}
          className={styles.inputFile}
        />
        <span>{formData.aadharPhoto ? formData.aadharPhoto.name : "No file chosen"}</span>
      </div>

      {/* Social Links Section */}
      <div className={styles.Horoscope}>
        <div className={styles.fieldGroup}>
          <label>Facebook Profile Link</label>
          <input
            type="text"
            name="facebookLink"
            value={formData.facebookLink}
            onChange={handleInputChange}
            className={styles.inputText}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label>Instagram Profile Link</label>
          <input
            type="text"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleInputChange}
            className={styles.inputText}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label>LinkedIn Profile Url</label>
          <input
            type="text"
            name="linkedinLink"
            value={formData.linkedinLink}
            onChange={handleInputChange}
            className={styles.inputText}
          />
        </div>
      </div>
    </form>
  );
};

export default Horoscope;
