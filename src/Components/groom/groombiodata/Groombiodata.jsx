import React, { useRef } from "react";
import styles from "./Groombiodata.module.css";
import { FaDownload, FaCamera, FaFilm, FaDumbbell, FaHandsHelping, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import profileDatas from "../biodata/Biodata";
// import { profiles } from "../groomprofiledata/Groomprofiledata";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function handleDownload(ref, name) {
  html2canvas(ref.current, { scale: 2 }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    // Calculate dimensions to fit A4 page
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`${name}_profile.pdf`);
  });
}

function Groombiodata() {
  return (
    <div className={styles.profileContainer}>
      {profileDatas.map((profile, index) => {
        const profileRef = useRef(null); // Ref for each profile card

        return (
          <div key={index} className={styles.profileCard} ref={profileRef}>
            {/* Profile Header */}
            <div className={styles.containar1}>
              <div className={styles.text}>{profile.name}</div>
              <div className={styles.actions}>
                <button
                  onClick={() => handleDownload(profileRef, profile.name)}
                  className={styles.downloadButton}
                >
                  <FaDownload />
                </button>
              </div>
            </div>

            {/* Profile Content */}
            <div id="profileContent" className={styles.main}>
              {/* Profile Image Section */}
              <div className={styles.maincontainar}>
                <div className={styles.imageSection}>
                  <img
                    src={profile.image}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                </div>
              </div>
              <div className={styles.containar2}>
                {/* Profile Details Section */}
                <div className={styles.detailsSection}>
                  <div className={styles.texts}>{profile.name}</div>
                  {Object.entries({
                    Age: profile.age,
                    "Date of Birth": profile.birthdate,
                    Job: profile.job,
                    Location: profile.location,
                    Bio: profile.bio,
                  }).map(([key, value], idx) => (
                    <p key={idx}>
                      <b>{key}:</b> {value || "N/A"}
                    </p>
                  ))}
                </div>

                {/* Additional Sections */}
                <div className={styles.hobbies}>
                  <h3>Hobbies & Interests</h3>
                  <ul>
                    {profile.hobbies.map((hobby, idx) => (
                      <li key={idx}>
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
                  <p>
                    <FaPhoneAlt /> {profile.contact.phone}
                  </p>
                  <p>
                    <FaEnvelope /> {profile.contact.email}
                  </p>
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
      })}
    </div>
  );
}

export default Groombiodata;
