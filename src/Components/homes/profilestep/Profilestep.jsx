import { Link } from 'react-router-dom';
import styles from "./Profilestep.module.css";

const Profilestep = () => {
  return (
    <div className={styles.profileStepsContainer}>
      <h2 className={styles.title}>Create Your Profile Now.....</h2>
      <p className={styles.subtitle}>Create Your Profile Today and Begin Your Journey to Finding True Love and Lasting Happiness!</p>

      {/* Steps Section */}
      <div className={styles.stepsSection}>
        <div className={styles.stepsRow}>
          <div className={styles.stepColumn}>
            <div className={styles.circleIcon}>
              <span role="img" aria-label="create" className={styles.icon}>📝</span>
            </div>
            <Link to="/personaldetails">
              <h5 className={styles.stepTitle}>Create your profile</h5>
            </Link>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </div>

          <div className={styles.arrowColumn}>
            <div className={styles.arrow}></div>
          </div>

          <div className={styles.stepColumn}>
            <div className={styles.circleIcon}>
              <span role="img" aria-label="find" className={styles.icon}>🔍</span>
            </div>
            <Link to="/ExpectationsDetailsForm">
              <h5 className={styles.stepTitle}>Find Compatible</h5>
            </Link>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </div>

          <div className={styles.arrowColumn}>
            <div className={styles.arrow}></div>
          </div>

          <div className={styles.stepColumn}>
            <div className={styles.circleIcon}>
              <span role="img" aria-label="connect" className={styles.icon}>💬</span>
            </div>
            <h5 className={styles.stepTitle}>Get to know them</h5>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </div>

          <div className={styles.arrowColumn}>
            <div className={styles.arrow}></div>
          </div>

          <div className={styles.stepColumn}>
            <div className={styles.circleIcon}>
              <span role="img" aria-label="love" className={styles.icon}>❤️</span>
            </div>
            <h5 className={styles.stepTitle}>Find love!</h5>
            <p className={styles.stepDescription}>Honestly you search for a life Partner? Simple! Create your Matrimonial Profile.</p>
          </div>
        </div>
      </div>

      <button className={styles.registerButton}>
        Register
      </button>
    </div>
  );
};

export default Profilestep;
