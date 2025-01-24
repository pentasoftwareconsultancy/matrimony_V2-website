import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate(); // Hook for navigation

  const handleCardClick = () => {
    navigate(`/profile/${profile._id}`); // Navigate to the detailed profile page with the ID
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.content}>
        <div className={styles.image}>
          <img
            src={
              profile.finalStepDetails?.profilePhoto ||
              "https://via.placeholder.com/100"
            }
            alt={profile.fullName || "Avatar"}
            className={styles.avatar}
          />
        </div>
        <div className={styles.info}>
          <h2>{profile.fullName}</h2>
          <p>
            <strong>Age:</strong> {profile.email} 
            {profile.mobileNumber}
          </p>
          <p>
            <strong>Date of birth:</strong>
            {profile.dateOfBirth}
          </p>
          <p>
            <strong>Location:</strong>
            {profile.city}
          </p>
          <p>
            <strong>Annual Income:</strong>
            {profile.annualIncome}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
