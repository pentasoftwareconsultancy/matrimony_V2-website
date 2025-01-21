import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Profilecomponet.module.css";
import profilesData from "../bridedata/Bridedata"; // Adjust the path based on your folder structure
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

const ProfileComponent = () => {
  const { index } = useParams(); // Get the profile index from the route parameter
  const profile = profilesData[parseInt(index)]; // Fetch the profile using the index

  // Download function to save profile as PDF
  const handleDownload = () => {
    const element = document.getElementById("profileContent"); // The profile content section
    html2pdf(element); // Create the PDF
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
      </div>

      <div id="profileContent" className={styles.main}>
        <div className={styles.containar1}>
          <div className={styles.imageSection}>
            <img src={profile.image} alt="Profile" className={styles.profileImage} />
          </div>
        </div>
        <div className={styles.containar2}>
          <div className={styles.detailsSection}>
            <div className={styles.name}>{profile.name}</div>
            <div className={styles.baidata}>
              <b>Age:</b> {profile.age},<br />
              <b>Date of Birth:</b> {profile.Birthdate},<br />
              <b>Job:</b> {profile.job},<br />
              <b>Location:</b> {profile.location}
            </div>
            <p>Bio: {profile.bio}</p>
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
