import React from "react";
import styles from "./ProfileList.module.css";
import { Link } from "react-router-dom";
import ProfileCard from "../profilecard/Profilecard";
import profilesData from "../bridedata/Bridedata"; // Importing profilesData from data file

const ProfileList = () => {
  return (
    <div className={styles.list}>
      {profilesData.map((profile, index) => (
        <Link to={`/profile/${index}`} key={index}>
          <ProfileCard profile={profile} />
        </Link>
      ))}
    </div>
  );
};

export default ProfileList;
