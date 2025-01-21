import React from "react";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>About Us</h2>
        <p>
          You have the option to select one of our two exclusive formats. If you
          need help in deciding, reach out to us and we would be happy to help you.
        </p>
        <p>
          Round the Room events are currently offered to people in Delhi/NCR,
          Mumbai, and Bangalore. Each of our bespoke Round the Room events has
          handpicked attendees who make it to the event by invite only. This is
          to ensure that at least the odds are in your favor, giving you a great
          chance to hold a conversation and eventually vibe with someone whose
          nuttiness matches your own.
        </p>
        <ul>
          <li>Register your profile</li>
          <li>Accept invite to the event</li>
          <li>
            Meet each and every person in the event through a structured format
          </li>
          <li>Let us know who you would like to continue the conversation with</li>
        </ul>
        <p className={styles.note}>
          Please note – We share your contact information after the event, only in
          case of mutual interest shown by both individuals.
        </p>
      </div>
      <div className={styles.statsSection}>
        <div className={styles.stat}>
          <span className={styles.statNumber}>2M</span>
          <span className={styles.statLabel}>2 Million active users</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>19</span>
          <span className={styles.statLabel}>Experienced employees</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNumber}>6</span>
          <span className={styles.statLabel}>Years of experience</span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;