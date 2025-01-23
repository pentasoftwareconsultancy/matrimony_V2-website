import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Groombiodata.module.css";
import profilesData from "../../bride/bridedata/Bridedata"; 
import {
  FaCamera,
  FaFilm,
  FaDumbbell,
  FaHandsHelping,
  FaPhoneAlt,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import html2pdf from "html2pdf.js"; // Importing html2pdf

const Profilebiodata = () => {
  const { index } = useParams(); // Get the profile index from the route parameter
  const data = profilesData[parseInt(index)]; // Fetch the profile using the index

  // Download function to save profile as PDF
  const handleDownload = () => {
    const element = document.getElementById("profileContent"); // The profile content section
    html2pdf(element); // Create the PDF
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.text}>{data.name}</div>
        <div className={styles.actions}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            <FaDownload />
          </button>
        </div>
      </div>

      <div id="profileContent" className={styles.main}>
        <div className={styles.containar1}>
          <div className={styles.imageSection}>
            <img src={data.image} alt="Profile" className={styles.profileImage} />
          </div>
        </div>
        <div className={styles.containar2}>
          <div className={styles.detailsSection}>
            <div className={styles.name}>{data.name}</div>
            <div className={styles.baidata}>
              <b>Age:</b> {data.age},<br />
              <b>Date of Birth:</b> {data.Birthdate},<br />
              <b>Job:</b> {data.job},<br />
              <b>Location:</b> {data.location}
            </div>
            <p>Bio: {data.bio}</p>
          </div>

          <div className={styles.hobbies}>
            <h3>Hobbies & Interests</h3>
            <ul>
              {data.hobbies.map((hobby, index) => (
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
            <p><FaPhoneAlt /> {data.contact.phone}</p>
            <p><FaEnvelope /> {data.contact.email}</p>
          </div>

          <div className={styles.familyDetails}>
            <h3>Family Details</h3>
            <p>Father: {data.family.father}</p>
            <p>Mother: {data.family.mother}</p>
            <p>Siblings: {data.family.siblings}</p>
          </div>

          <div className={styles.preferences}>
            <h3>What She Is Looking For</h3>
            <ul>
              <li>Age: {data.preferences.age}</li>
              <li>Height: {data.preferences.height}</li>
              <li>Marital Status: {data.preferences.maritalStatus}</li>
              <li>Gothra: {data.preferences.gothra}</li>
              <li>Religion: {data.preferences.religion}</li>
              <li>Mother Tongue: {data.preferences.motherTongue}</li>
              <li>Country: {data.preferences.country}</li>
              <li>State: {data.preferences.state}</li>
            </ul>
            <p>You match 7/9 of her preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profilebiodata;
