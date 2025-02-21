import React, { useState, useEffect } from "react";
import styles from "./Step.module.css";
import Profile from "../profile/Profile";
import FamilyBackground from "../familyback/Familyback";
import Education from "../education/Education";
import Horoscope from "../horoscope/Horoscope";  // Import Horoscope component

const Step = () => {
  const [currentStep, setCurrentStep] = useState(1); // Default to Profile (Step 1)
  const [isFormValid, setIsFormValid] = useState(false);

  const initialFormData = {
    profile: {
      fullName: "",
      email: "",
      mobile: "",
      password: "",
      dob: "",
      city: "",
      gender: "",
    },
    education: {
      educationLevel: "",
      occupation: "",
      annualIncome: "",
      community: "",
      religion: "",
      timeOfBirth: "",
      cityOfBirth: "",
      manglik: "",
      gotra: "",
      ras: "",
      gan: "",
      nadi: "",
      charan: "",
      ageRangeFrom: "",
      ageRangeTo: "",
      partnerEducation: "",
      partnerLocation: "",
      partnerPackage: "",
      partnerAbout: "",
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
    horoscope: { // Ensure default structure for horoscope
      profilePhoto: null,
      panCardNumber: "",
      companyId: null,
      aadharPassportType: "Aadhar Card",
      aadharNumber: "",
      aadharPhoto: null,
      facebookLink: "",
      instagramLink: "",
      linkedinLink: "",
    },
  };

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData ? JSON.parse(savedData) : initialFormData;
  });

  const steps = [
    { id: 1, label: "Profile", component: <Profile formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
    { id: 2, label: "Personal Details", component: <FamilyBackground formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
    { id: 3, label: "Family Background", component: <Education formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
    { id: 4, label: "Documents", component: <Horoscope formData={formData} setFormData={setFormData} setIsFormValid={setIsFormValid} /> },
  ];

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
  };

  const handleSubmit = () => {
    const isComplete = Object.values(formData).every((step) => {
      return Object.values(step).every((field) => field !== "");
    });

    if (!isComplete) {
      alert("Please complete all steps before submitting.");
    } else {
      console.log("Form Data Submitted:", formData);
      alert("Form submitted successfully!");
      localStorage.setItem("formData", JSON.stringify(formData));
    }
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepBar}>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${styles.step} ${currentStep === step.id ? styles.active : ""}`}
            onClick={() => handleStepClick(step.id)}
          >
            {currentStep === step.id ? "\u2605" : "\u2606"} {step.label}
          </div>
        ))}
      </div>

      <div className={styles.stepContent}>
        {steps.find(step => step.id === currentStep)?.component}
      </div>

      <div className={styles.stepActions}>
        {currentStep !== null && (
          <>
            <button
              className={styles.previous}
              onClick={() => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            {currentStep === steps.length ? (
              <button
                className={styles.submit}
                onClick={handleSubmit}
                disabled={!isFormValid}
              >
                Submit
              </button>
            ) : (
              <button
                className={styles.next}
                onClick={() => setCurrentStep(currentStep + 1)}
              >
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Step;
