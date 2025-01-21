// Step Component
import React, { useState } from "react";
import styles from "./Step.module.css";
import Profile from "../profile/Profile";
import FamilyBackground from "../familyback/Familyback";
import Education from "../education/Education";
import HoroscopeForm from "../horoscope/Horoscope";

const Step = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  const initialFormData = {
    profile: { fullName: "", email: "", mobile: "", password: "", dob: "", city: "", gender: "" },
    education: { educationLevel: "", occupation: "", annualIncome: "" },
    familyBackground: {
      maritalStatus: "",
      numChildren: "",
      height: "",
      bodyType: "",
      weight: "",
      fatherName: "",
      fatherOccupation: "",
      motherName: "",
      motherOccupation: "",
      numBrothers: "",
      numSisters: "",
      culturalValues: "",
      relationshipToProfile: "",
      aboutFamily: "",
    },
    astrology: { community: "", religion: "", timeOfBirth: "", cityOfBirth: "", manglik: "", gotra: "", ras: "", gan: "", nadi: "", charan: "" },
    partner: { ageRangeFrom: "", ageRangeTo: "", partnerEducation: "", partnerLocation: "", partnerPackage: "", partnerAbout: "" },
  };

  const [formData, setFormData] = useState(initialFormData);

  const steps = [
    { id: 1, label: "Profile", component: <Profile formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
    { id: 2, label: "Family Background", component: <FamilyBackground formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
    { id: 3, label: "Education", component: <Education formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
    { id: 4, label: "Horoscope", component: <HoroscopeForm formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
  ];

  const handleStepChange = (direction) => {
    if (isFormValid || direction === -1) {
      setCurrentStep((prev) => Math.max(1, Math.min(prev + direction, steps.length)));
    } else {
      alert("Please fill all required fields before proceeding.");
    }
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepBar}>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${styles.step} ${currentStep === step.id ? styles.active : ""}`}
          >
            {currentStep >= step.id ? "\u2605" : "\u2606"} {step.label}
          </div>
        ))}
      </div>
      <div className={styles.stepContent}>{steps[currentStep - 1].component}</div>
      <div className={styles.stepActions}>
        <button onClick={() => handleStepChange(-1)} disabled={currentStep === 1}>
          Previous
        </button>
        {currentStep === steps.length ? (
          <button onClick={handleSubmit} disabled={!isFormValid}>
            Submit
          </button>
        ) : (
          <button onClick={() => handleStepChange(1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Step;