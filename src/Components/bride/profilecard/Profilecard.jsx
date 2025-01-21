import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ profile }) => {
  return (
    <div className={styles.card}>
     
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src={profile.image || "https://via.placeholder.com/100"}
            alt={profile.name || "Avatar"}
            className={styles.avatar}
          />
        </div>
        <div className={styles.info}>
        <div className={styles.header}>
        <h2>{profile.name}</h2>
      </div>
      <div className={styles.main}>
          <p>
            <strong>Caste:</strong> {profile.caste || "N/A"}
          </p>
          <p>
            <strong>Age / Height:</strong> {profile.age || "N/A"} /{" "}
            {profile.height || "N/A"}
          </p>
          <p>
            <strong>Education:</strong> {profile.education || "N/A"}
          </p>
          <p>
            <strong>Occupation:</strong> {profile.occupation || "N/A"}
          </p>
          <p>
            <strong>Annual Income:</strong> {profile.income || "N/A"}
          </p>
          <p>
            <strong>Work Location:</strong> {profile.workLocation || "N/A"}
          </p>
          <p>
            <strong>Native Place:</strong> {profile.nativePlace || "N/A"}
          </p>
          </div>
          <button className={styles.connect} >Connect Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
