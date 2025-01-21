import React, { useState, useEffect } from "react";
import styles from "./Education.module.css";

const Education = () => {
  // Initialize formData with the correct structure
  const [formData, setFormData] = useState({
    education: {
      educationLevel: "",
      occupation: "",
      annualIncome: "",
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
    astrology: {
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
    },
    partner: {
      ageRangeFrom: "",
      ageRangeTo: "",
      partnerEducation: "",
      partnerLocation: "",
      partnerPackage: "",
      partnerAbout: "",
    },
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = validateForm();
    setIsFormValid(isValid);
  }, [formData]);

  const validateForm = () => {
    const { education, familyBackground, astrology, partner } = formData;
    // Ensure required fields for each section are filled
    return (
      education.educationLevel &&
      education.occupation &&
      education.annualIncome &&
      familyBackground.maritalStatus &&
      familyBackground.height &&
      familyBackground.bodyType &&
      astrology.religion &&
      astrology.cityOfBirth &&
      partner.ageRangeFrom &&
      partner.ageRangeTo &&
      partner.partnerEducation &&
      partner.partnerAbout
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const section = e.target.dataset.section;

    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value,
      },
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Education and Family Details</h2>
      <form>
        {/* Section 1: Family Information */}
        <div className={styles.section}>
          <h3>Family Information</h3>
          <div className={styles.formGroup}>
            <label htmlFor="fatherName">Father Name</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              className={styles.input}
              value={formData.familyBackground.fatherName}
              onChange={handleChange}
              data-section="familyBackground"
              placeholder="Father Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="fatherOccupation">Father Occupation</label>
            <input
              type="text"
              id="fatherOccupation"
              name="fatherOccupation"
              className={styles.input}
              value={formData.familyBackground.fatherOccupation}
              onChange={handleChange}
              data-section="familyBackground"
              placeholder="Father Occupation"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="motherName">Mother Name</label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              className={styles.input}
              value={formData.familyBackground.motherName}
              onChange={handleChange}
              data-section="familyBackground"
              placeholder="Mother Name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="motherOccupation">Mother Occupation</label>
            <input
              type="text"
              id="motherOccupation"
              name="motherOccupation"
              className={styles.input}
              value={formData.familyBackground.motherOccupation}
              onChange={handleChange}
              data-section="familyBackground"
              placeholder="Mother Occupation"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="numBrothers">How Many Brothers</label>
            <input
              type="number"
              id="numBrothers"
              name="numBrothers"
              className={styles.input}
              value={formData.familyBackground.numBrothers}
              onChange={handleChange}
              data-section="familyBackground"
              placeholder="Number of Brothers"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="numSisters">How Many Sisters</label>
            <input
              type="number"
              id="numSisters"
              name="numSisters"
              className={styles.input}
              value={formData.familyBackground.numSisters}
              onChange={handleChange}
              data-section="familyBackground"
              placeholder="Number of Sisters"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="culturalValues">Cultural/Family Values</label>
            <select
              id="culturalValues"
              name="culturalValues"
              className={styles.input}
              value={formData.familyBackground.culturalValues}
              onChange={handleChange}
              data-section="familyBackground"
            >
              <option>- Please Select -</option>
              <option>Traditional</option>
              <option>Modern</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="relationshipToProfile">Relationship to Profile</label>
            <select
              id="relationshipToProfile"
              name="relationshipToProfile"
              className={styles.input}
              value={formData.familyBackground.relationshipToProfile}
              onChange={handleChange}
              data-section="familyBackground"
            >
              <option>- Please Select -</option>
              <option>Brother</option>
              <option>Sister</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="aboutFamily">About Yourself & Family*</label>
            <textarea
              id="aboutFamily"
              name="aboutFamily"
              className={styles.textarea}
              value={formData.familyBackground.aboutFamily}
              onChange={handleChange}
              data-section="familyBackground"
              placeholder="Write about yourself & family"
            />
          </div>
        </div>

        {/* Section 2: Patrika / Astrology Details */}
        <div className={styles.section}>
          <h3>Patrika / Astrology Details</h3>
          <div className={styles.formGroup}>
            <label htmlFor="community">Community/ Mother Tongue</label>
            <select
              id="community"
              name="community"
              className={styles.input}
              value={formData.astrology.community}
              onChange={handleChange}
              data-section="astrology"
            >
              <option>- Please Select -</option>
              <option>Hindi</option>
              <option>Marathi</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="religion">Religion*</label>
            <select
              id="religion"
              name="religion"
              className={styles.input}
              value={formData.astrology.religion}
              onChange={handleChange}
              data-section="astrology"
            >
              <option>- Please Select -</option>
              <option>Hinduism</option>
              <option>Islam</option>
              <option>Christianity</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="timeOfBirth">Time of Birth</label>
            <input
              type="text"
              id="timeOfBirth"
              name="timeOfBirth"
              className={styles.input}
              value={formData.astrology.timeOfBirth}
              onChange={handleChange}
              data-section="astrology"
              placeholder="--:-- --"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cityOfBirth">City/Town of Birth*</label>
            <input
              type="text"
              id="cityOfBirth"
              name="cityOfBirth"
              className={styles.input}
              value={formData.astrology.cityOfBirth}
              onChange={handleChange}
              data-section="astrology"
              placeholder="Enter city name here"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="manglik">Are you Manglik</label>
            <select
              id="manglik"
              name="manglik"
              className={styles.input}
              value={formData.astrology.manglik}
              onChange={handleChange}
              data-section="astrology"
            >
              <option>- Please Select -</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="gotra">Gotra</label>
            <input
              type="text"
              id="gotra"
              name="gotra"
              className={styles.input}
              value={formData.astrology.gotra}
              onChange={handleChange}
              data-section="astrology"
              placeholder="Gotra"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="ras">Ras</label>
            <input
              type="text"
              id="ras"
              name="ras"
              className={styles.input}
              value={formData.astrology.ras}
              onChange={handleChange}
              data-section="astrology"
              placeholder="Ras"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="gan">Gan</label>
            <input
              type="text"
              id="gan"
              name="gan"
              className={styles.input}
              value={formData.astrology.gan}
              onChange={handleChange}
              data-section="astrology"
              placeholder="Gan"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="nadi">Nadi</label>
            <input
              type="text"
              id="nadi"
              name="nadi"
              className={styles.input}
              value={formData.astrology.nadi}
              onChange={handleChange}
              data-section="astrology"
              placeholder="Nadi"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="charan">Charan</label>
            <input
              type="text"
              id="charan"
              name="charan"
              className={styles.input}
              value={formData.astrology.charan}
              onChange={handleChange}
              data-section="astrology"
              placeholder="Charan"
            />
          </div>
        </div>

        {/* Section 3: More About Your Ideal Partner */}
        <div className={styles.section}>
          <h3>More About Your Ideal Partner</h3>
          <div className={styles.formGroup}>
            <label htmlFor="ageRange">Age Range*</label>
            <div className={styles.inlineFields}>
              <input
                type="number"
                id="ageRangeFrom"
                name="ageRangeFrom"
                className={styles.inputSmall}
                value={formData.partner.ageRangeFrom}
                onChange={handleChange}
                data-section="partner"
                placeholder="From"
              />
              <input
                type="number"
                id="ageRangeTo"
                name="ageRangeTo"
                className={styles.inputSmall}
                value={formData.partner.ageRangeTo}
                onChange={handleChange}
                data-section="partner"
                placeholder="To"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="partnerEducation">Education*</label>
            <select
              id="partnerEducation"
              name="partnerEducation"
              className={styles.input}
              value={formData.partner.partnerEducation}
              onChange={handleChange}
              data-section="partner"
            >
              <option>- Please Select -</option>
              <option>Diploma</option>
              <option>Bachelor's</option>
              <option>Master's</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="partnerLocation">Location</label>
            <input
              type="text"
              id="partnerLocation"
              name="partnerLocation"
              className={styles.input}
              value={formData.partner.partnerLocation}
              onChange={handleChange}
              data-section="partner"
              placeholder="Enter Location"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="partnerPackage">Package</label>
            <select
              id="partnerPackage"
              name="partnerPackage"
              className={styles.input}
              value={formData.partner.partnerPackage}
              onChange={handleChange}
              data-section="partner"
            >
              <option>- Please Select -</option>
              <option>Below $50k</option>
              <option>$50k-$100k</option>
              <option>Above $100k</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="partnerAbout">About your Ideal Partner*</label>
            <textarea
              id="partnerAbout"
              name="partnerAbout"
              className={styles.textarea}
              value={formData.partner.partnerAbout}
              onChange={handleChange}
              data-section="partner"
              placeholder="Write about your ideal partner"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Education;
