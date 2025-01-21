import React from "react";
import styles from "./ProfileCard.module.css"; // Ensure correct CSS import

const ProfileCard = ({ profile }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={profile.image} alt={profile.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <div className={styles.namemain}>


        <p className={styles.name}>{profile.name}</p>
        <p className={styles.info}>
          Age: {profile.age} yrs, <br/> Height:
          {profile.height}
        </p>
        <div className={styles.info}>Age:{profile.age}</div>
        <p className={styles.info}>{profile.status}</p>
        <p className={styles.info}>{profile.location}</p>
        <p className={styles.job}>{profile.job}</p>
        <p className={styles.bio}>{profile.bio}</p>

        <button className={styles.connectButton}>Connect Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
