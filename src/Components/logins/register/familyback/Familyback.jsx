import React, { useState, useEffect } from "react";
import styles from "./Familyback.module.css";

const Familyback = ({ formData, setFormData, setIsFormValid }) => {
  const [localFormData, setLocalFormData] = useState(formData.familyBackground);

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      familyBackground: localFormData,
    }));

    // Check if all required fields are filled out and set the validation state
    const isValid =
      localFormData.maritalStatus &&
      localFormData.height &&
      localFormData.bodyType &&
      localFormData.complexion &&
      localFormData.bloodGroup;
    setIsFormValid(isValid);
  }, [localFormData, setFormData, setIsFormValid]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Create Profile</h2>
      <form>
        {/* Section 1: Personal Details */}
        <div className={styles.section}>
          <h3>Personal Details</h3>
          <div className={styles.formGroup}>
            <label htmlFor="maritalStatus">Marital Status*</label>
            <select
              id="maritalStatus"
              className={styles.input}
              value={localFormData.maritalStatus || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Single</option>
              <option>Married</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="numChildren">No. of Children</label>
            <select
              id="numChildren"
              className={styles.input}
              value={localFormData.numChildren || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>0</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="height">Height*</label>
            <select
              id="height"
              className={styles.input}
              value={localFormData.height || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>5'0"</option>
              <option>5'5"</option>
              <option>6'0"</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bodyType">Body Type*</label>
            <select
              id="bodyType"
              className={styles.input}
              value={localFormData.bodyType || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Slim</option>
              <option>Athletic</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              id="weight"
              className={styles.input}
              placeholder="Enter Weight (in kg)"
              value={localFormData.weight || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="complexion">Complexion*</label>
            <select
              id="complexion"
              className={styles.input}
              value={localFormData.complexion || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Fair</option>
              <option>Wheatish</option>
              <option>Dark</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bloodGroup">Blood Group*</label>
            <select
              id="bloodGroup"
              className={styles.input}
              value={localFormData.bloodGroup || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>A+</option>
              <option>B+</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="smoke">Smoke</label>
            <select
              id="smoke"
              className={styles.input}
              value={localFormData.smoke || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="drink">Drink</label>
            <select
              id="drink"
              className={styles.input}
              value={localFormData.drink || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="diet">Diet</label>
            <select
              id="diet"
              className={styles.input}
              value={localFormData.diet || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="specialCase">Special Case</label>
            <select
              id="specialCase"
              className={styles.input}
              value={localFormData.specialCase || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        {/* Section 2: Education and Career Details */}
        <div className={styles.section}>
          <h3>Education and Career Details</h3>
          <div className={styles.formGroup}>
            <label htmlFor="educationLevel">Education Level*</label>
            <select
              id="educationLevel"
              className={styles.input}
              value={localFormData.educationLevel || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Bachelor's</option>
              <option>Master's</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="educationField">Education Field*</label>
            <select
              id="educationField"
              className={styles.input}
              value={localFormData.educationField || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Engineering</option>
              <option>Medicine</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="educationDescription">Education Description</label>
            <input
              type="text"
              id="educationDescription"
              className={styles.input}
              placeholder="Education Description"
              value={localFormData.educationDescription || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="occupation">Occupation*</label>
            <select
              id="occupation"
              className={styles.input}
              value={localFormData.occupation || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Engineer</option>
              <option>Doctor</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="occupationDescription">Occupation Description</label>
            <input
              type="text"
              id="occupationDescription"
              className={styles.input}
              placeholder="Occupation Description"
              value={localFormData.occupationDescription || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="companyName">Company Name*</label>
            <input
              type="text"
              id="companyName"
              className={styles.input}
              placeholder="Company Name"
              value={localFormData.companyName || ""}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="residencyStatus">Residency Status</label>
            <select
              id="residencyStatus"
              className={styles.input}
              value={localFormData.residencyStatus || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Citizen</option>
              <option>Permanent Resident</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="annualIncome">Annual Income*</label>
            <select
              id="annualIncome"
              className={styles.input}
              value={localFormData.annualIncome || ""}
              onChange={handleChange}
            >
              <option>- Please Select -</option>
              <option>Below $50k</option>
              <option>$50k-$100k</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Familyback;
