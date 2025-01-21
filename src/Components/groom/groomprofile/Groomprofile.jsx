import React from "react";
import styles from "./Groomprofile.module.css"
import {profiles} from "../groomprofiledata/Groomprofiledata" 
import { Link } from "react-router-dom";

const GroomProfile = () => {
  return (
    <div>
      {profiles.map((profile, index) => (
        <div key={index} className="profile-card">
          <Link to="/profilegroom/:index">
          <div className={styles.card}>
                <div className={styles.imageContainer}>
                  <img src={profile.image} alt={profile.name} className={styles.image} />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{profile.name}</h3>
                  <p className={styles.info}>
                    {profile.age} yrs, {profile.height}
                  </p>
                  <p className={styles.info}>{profile.status}</p>
                  <p className={styles.info}>{profile.location}</p>
                  <p className={styles.job}>{profile.job}</p>
                  <p className={styles.bio}>{profile.bio}</p>
                  <button className={styles.connectButton}>Connect Now</button>
                </div>
              </div>
              </Link> 
        </div>
        
      ))}
      
    </div>
  );
};

export default GroomProfile;
