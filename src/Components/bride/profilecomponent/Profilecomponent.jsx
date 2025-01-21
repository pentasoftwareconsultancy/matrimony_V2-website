import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Profilecomponet.module.css";
import image1 from "../../bride/images/girl6.jpg";

// Icons (you can use any icon library like FontAwesome or Material Icons)
import { FaCamera, FaFilm, FaDumbbell, FaHandsHelping, FaPhoneAlt, FaEnvelope, FaDownload, FaPrint } from 'react-icons/fa';
import html2pdf from 'html2pdf.js'; // Importing html2pdf

const ProfileComponent = () => {
  const { index } = useParams(); // Get the profile index from the route parameter
  const profiles = [
    {
      name: "Priyanka J",
      age: 27,
      Birthdate:"20-nov-1998",
      height: "5'4\"",
      status: "Never Married",
      location: "Pune, Maharashtra",
      job: "Customer Support / BPO",
      bio: "I describe myself as someone who's caring, trendy, smart, and more...",
      image: image1,
      hobbies: ["Photography", "Movies", "Working Out", "Social Service"],
      contact: {
        phone: "+91 1234567890",
        email: "priyanka@example.com"
      },
      family: {
        father: "Businessman",
        mother: "Housewife",
        siblings: "1 brother, 1 sister"
      },
      preferences: {
        age: "24 to 32",
        height: "5'10\" to 7'0\"",
        maritalStatus: "Never Married",
        gothra: "Don't include my Gothra",
        religion: "Sikh, Hindu",
        motherTongue: "Hindi",
        country: "India",
        state: "Chhattisgarh, Delhi-NCR, Haryana, Madhya Pradesh, Uttar Pradesh"
      }
    },
    {
      name: "Drashana S",
      age: 24,
      height: "5'3\"",
      status: "Never Married",
      location: "Chambhar, Maharashtra",
      job: "Software Developer / Programmer",
      bio: "A little about me, I have completed my B.E and work in IT.",
      image: image1,
      hobbies: ["Photography", "Movies", "Working Out", "Social Service"],
      contact: {
        phone: "+91 9876543210",
        email: "drashana@example.com"
      },
      family: {
        father: "Engineer",
        mother: "Teacher",
        siblings: "1 brother"
      },
      preferences: {
        age: "25 to 30",
        height: "5'5\" to 6'0\"",
        maritalStatus: "Never Married",
        gothra: "Don't include my Gothra",
        religion: "Hindu",
        motherTongue: "Marathi",
        country: "India",
        state: "Maharashtra"
      }
    }
    // Add more profiles as needed
  ];

  const profile = profiles[parseInt(index)]; // Convert the index to an integer

  // Download function to save profile as PDF
  const handleDownload = () => {
    const element = document.getElementById('profileContent'); // The profile content section
    html2pdf(element); // Create the PDF
  };

  // Print function to open the print dialog
  const handlePrint = () => {
    const printWindow = window.open('', '', 'height=500,width=800');
    printWindow.document.write('<html><head><title>Profile Print</title></head><body>');
    printWindow.document.write(document.getElementById('profileContent').innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.text}>{profile.name}</div>
        <div className={styles.actions}>
        <button onClick={handleDownload} className={styles.downloadButton}>
            <FaDownload />
             
          </button>
          </div>
        {/* Download and Print buttons */}
        {/* <div className={styles.actions}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            <FaDownload />
             Download as PDF
          </button>
          <button onClick={handlePrint} className={styles.printButton}>
            <FaPrint /> Print Profile
          </button>
        </div> */}
      </div>
      
      <div id="profileContent" className={styles.main}>
        <div className={styles.containar1}>
      <div className={styles.imageSection}>
            <img src={profile.image} alt="Profile" className={styles.profileImage} />
          </div>
          </div>
          <div className={styles.containar2}>
        <div className={styles.profile}>
          {/* <div className={styles.imageSection}>
            <img src={profile.image} alt="Profile" className={styles.profileImage} />
          </div> */}

          <div className={styles.detailsSection}>
            <div className={styles.name}>{profile.name}</div>
            <div className={styles.baidata}> <b>Age:</b> {profile.age} ,
              <br/> <b>Date of Birth:</b> {profile.Birthdate},<br/>
              <b>Job:</b> {profile.job},<br/> Loction: {profile.location}</div>
            <p>Bio: {profile.bio}</p>
            {/* <button className={styles.connectButton}>Connect Now</button> */}
          </div>
        </div>

        <div className={styles.hobbies}>
          <h3>Hobbies & Interests</h3>
          <ul>
            {profile.hobbies.map((hobby, index) => (
              <li key={index}>
                {hobby === "Photography" && <FaCamera />} 
                {hobby === "Movies" && <FaFilm />} 
                {hobby === "Working Out" && <FaDumbbell />} 
                {hobby === "Social Service" && <FaHandsHelping />}
                {hobby}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactDetails}>
          <h3>Contact Details</h3>
          <p><FaPhoneAlt /> {profile.contact.phone}</p>
          <p><FaEnvelope /> {profile.contact.email}</p>
        </div>

        <div className={styles.familyDetails}>
          <h3>Family Details</h3>
          <p>Father: {profile.family.father}</p>
          <p>Mother: {profile.family.mother}</p>
          <p>Siblings: {profile.family.siblings}</p>
        </div>

        <div className={styles.preferences}>
          <h3>What She Is Looking For</h3>
          <ul>
            <li>Age: {profile.preferences.age}</li>
            <li>Height: {profile.preferences.height}</li>
            <li>Marital Status: {profile.preferences.maritalStatus}</li>
            <li>Gothra: {profile.preferences.gothra}</li>
            <li>Religion: {profile.preferences.religion}</li>
            <li>Mother Tongue: {profile.preferences.motherTongue}</li>
            <li>Country: {profile.preferences.country}</li>
            <li>State: {profile.preferences.state}</li>
          </ul>
          <p>You match 7/9 of her preferences</p>
        </div>
        </div>
      </div>
      </div>
    
  );
};

export default ProfileComponent;
