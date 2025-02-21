import React from "react";
import styles from "./Aboutus.module.css";

const Aboutus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2>About Us</h2>
        <div className={styles.main}>
        <p className={styles.text}>
          Welcome to [Your Matrimony Website Name] — your trusted partner in finding lifelong companionship and love.
        </p>
        <p>
          At [Your Matrimony Website Name], we understand that marriage is one of the most important milestones in a person’s life. That's why we have created a platform that is dedicated to helping individuals find their perfect match based on shared values, interests, and aspirations.
        </p>
        <p>
          Our mission is to provide a seamless, secure, and respectful experience for all users in their quest for love and companionship. Whether you are looking for a traditional match or something modern and flexible, we offer a variety of services to suit your needs.
        </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className={styles.valuesSection}>
        <h3>Our Values</h3>
        <ul className={styles.valuesList}>
  <li>
    <strong>Trust and Security:</strong>
    <span>Your safety and privacy are our top priority. We take great care in ensuring that your personal information is kept secure.</span>
  </li>
  <li>
    <strong>Personalized Matchmaking:</strong>
    <span>We understand that every person is unique, so we offer advanced algorithms that match you based on your preferences and values.</span>
  </li>
  <li>
    <strong>Respect for Diversity:</strong>
    <span>We celebrate the diversity of cultures, religions, and backgrounds, offering a platform where everyone can find a match that aligns with their beliefs and traditions.</span>
  </li>
  <li>
    <strong>Commitment to Service:</strong>
    <span>Our dedicated support team is always ready to assist you, ensuring your journey towards finding love is smooth and enjoyable.</span>
  </li>
</ul>
      </div>

      {/* Stats Section */}
      {/* <div className={styles.statsSection}>
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
      </div> */}
    </div>
  );
};

export default Aboutus;
