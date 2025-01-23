import React from "react";
import styles from "./Groomprofile.module.css";

const Groomprofile = ({ profile }) => { 
  // Check if the profile object exists and has the necessary data
  if (!profile) {
    return <div>Loading...</div>; // Or show a placeholder
  }

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src={data.image || "https://via.placeholder.com/100"}
            alt={datae.name || "Avatar"}
            className={styles.avatar}
          />
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <h2>{data.name}</h2>
          </div>
          <div className={styles.main}>
            <p><strong>Caste:</strong> {data.caste || "N/A"}</p>
            <p><strong>Age / Height:</strong> {data.age || "N/A"} / {data.height || "N/A"}</p>
            <p><strong>Education:</strong> {data.education || "N/A"}</p>
            <p><strong>Occupation:</strong> {data.occupation || "N/A"}</p>
            <p><strong>Annual Income:</strong> {data.income || "N/A"}</p>
            <p><strong>Work Location:</strong> {data.workLocation || "N/A"}</p>
            <p><strong>Native Place:</strong> {data.nativePlace || "N/A"}</p>
          </div>
          <button className={styles.connect}>Connect Now</button>
        </div>
      </div>
    </div>
  );
};

export default Groomprofile;
