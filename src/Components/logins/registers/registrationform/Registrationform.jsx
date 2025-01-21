import React, { useState } from "react";
import styles from "./Registrationform.module.css";

const Registrationform = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.stepBar}>
        <span className={`${styles.step} ${step >= 1 ? styles.active : ""}`}>1</span>
        <span className={`${styles.step} ${step >= 2 ? styles.active : ""}`}>2</span>
        <span className={`${styles.step} ${step >= 3 ? styles.active : ""}`}>3</span>
        <span className={`${styles.step} ${step >= 4 ? styles.active : ""}`}>4</span>
      </div>
      <form className={styles.form}>
        <h2>Registration</h2>
        <p>You are just a few steps away from contacting 1000's of profiles!</p>
        <div className={styles.formGroup}>
          <label>Full Name*</label>
          <input type="text" placeholder="Full Name" />
        </div>
        <div className={styles.formGroup}>
          <label>Email Address*</label>
          <input type="email" placeholder="Email Address" />
        </div>
        <div className={styles.formGroup}>
          <label>Password*</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.formGroup}>
          <label>Date of Birth*</label>
          <input type="date" />
        </div>
        <div className={styles.formGroup}>
          <label>Gender*</label>
          <select>
            <option>-- Please Select --</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Country*</label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>State/Union Territory of Residence*</label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>City*</label>
          <input type="text" placeholder="Enter City" />
        </div>
        <div className={styles.formGroup}>
          <label>Caste*</label>
          <select>
            <option>Select</option>
          </select>
        </div>
        <div className={styles.buttonGroup}>
          <button type="button" onClick={handleBack} disabled={step === 1}>
            Back
          </button>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registrationform;
