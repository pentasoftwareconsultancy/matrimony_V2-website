import React, { useState, useEffect } from "react";
import styles from "./Education.module.css";

const Education = ({ formData, setFormData, setIsFormValid }) => {
  const [educationData, setEducationData] = useState(formData.education);

  useEffect(() => {
    const isValid = Object.values(educationData).every(value => value.trim() !== "");
    setIsFormValid(isValid);
  }, [educationData, setIsFormValid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationData((prevData) => ({ ...prevData, [name]: value }));
    setFormData((prevFormData) => ({
      ...prevFormData,
      education: { ...prevFormData.education, [name]: value },
    }));
  };

  return (
    <div className={styles.educationContainer}>
      <h2>Family Information</h2>
<div className={styles.family}>
      <div className={styles.main}>
     
      <label>Father Name*
      <input type="text" name="fatherName" value={educationData.fatherName} onChange={handleChange} required />
      </label>
 
     
      <label>Father Occupation*
      <input type="text" name="fatherOccupation" value={educationData.fatherOccupation} onChange={handleChange} required />
      </label>
     
      
      <label>Mother Name*
      <input type="text" name="motherName" value={educationData.motherName} onChange={handleChange} required />
      </label>
      
     
      <label>Mother Occupation*
      <input type="text" name="motherOccupation" value={educationData.motherOccupation} onChange={handleChange} required />
      </label>
      
      
      <label>How Many Brothers*
      <input type="number" name="numBrothers" value={educationData.numBrothers} onChange={handleChange} required />
      </label>
  
      
      <label>How Many Sisters*
      <input type="number" name="numSisters" value={educationData.numSisters} onChange={handleChange} required />
      </label>

      
      <label>Cultural / Family Value*
      <input type="text" name="culturalValues" value={educationData.culturalValues} onChange={handleChange} required />
      </label>
    
     
      <label>Relationship to Profile*
      <input type="text" name="relationshipToProfile" value={educationData.relationshipToProfile} onChange={handleChange} required />
      </label>
   
      
      </div>
      
      <div className={styles.containar}>
      <label>About Yourself & Family*
      <textarea name="aboutFamily" value={educationData.aboutFamily} onChange={handleChange} required></textarea>
      </label>
      </div>
</div>
      <h2>Patrika / Astrology Details</h2>
      <div className={styles.family}>
      <div className={styles.patrika}>
      
      <label>Community / Mother Tongue*
      <input type="text" name="community" value={educationData.community} onChange={handleChange} required />
      </label>
      
     
      <label>Religion*
      <input type="text" name="religion" value={educationData.religion} onChange={handleChange} required />
      </label>
            
      <label>Time of Birth*
      <input type="text" name="timeOfBirth" value={educationData.timeOfBirth} onChange={handleChange} required />
      </label>
      
      <label>City/Town of Birth*
      <input type="text" name="cityOfBirth" value={educationData.cityOfBirth} onChange={handleChange} required />
      </label>
      
      
      <label>Are you Manglik?
      <select name="manglik" value={educationData.manglik} onChange={handleChange} required>
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
        <option value="Don't Know">Don't Know</option>
      </select>
      </label>
      
      <label>Gotra
      <input type="text" name="gotra" value={educationData.gotra} onChange={handleChange} />
      </label>
      
     
      <label>Ras
      <input type="text" name="ras" value={educationData.ras} onChange={handleChange} />
      </label>
      
      <label>Gan
      <input type="text" name="gan" value={educationData.gan} onChange={handleChange} />
      </label>
      
      
      <label>Nadi
      <input type="text" name="nadi" value={educationData.nadi} onChange={handleChange} />
      </label>
    
 
      <label>Charan
      <input type="text" name="charan" value={educationData.charan} onChange={handleChange} />
      </label>
</div>

</div>


<div className={styles.family}>

      <h2>More About Your Ideal Partner</h2>
    
      <div className={styles.main}>
      <label>Age Range*
      <div className={styles.ageRange}>
        <input type="number" name="ageRangeFrom" value={educationData.ageRangeFrom} onChange={handleChange} required placeholder="From" />
        <input type="number" name="ageRangeTo" value={educationData.ageRangeTo} onChange={handleChange} required placeholder="To" />
      </div>
</label>
      <label>Education*
      <input type="text" name="partnerEducation" value={educationData.partnerEducation} onChange={handleChange} required />
      </label>
      <label>Location
      <input type="text" name="partnerLocation" value={educationData.partnerLocation} onChange={handleChange} />
      </label>
      <label>Package
      <input type="text" name="partnerPackage" value={educationData.partnerPackage} onChange={handleChange} />
      </label>
     
      </div>
      <label>About Your Ideal Partner*
      <textarea name="partnerAbout" value={educationData.partnerAbout} onChange={handleChange} required></textarea>
      </label>
      </div>
    </div>
  );
};

export default Education;
