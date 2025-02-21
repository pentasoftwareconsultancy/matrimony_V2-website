import React, { useState } from "react";
import styles from "./Sectionmain.module.css";
import ganpati from "../../about/image/ganpati.jpg";
import image2 from "../../about/image/image7.jpg";
import image3 from "../../about/image/image3.jpg";

const Sectionmain = () => {
  const images = [ganpati, image2, image3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why Us</h2>
      <div className={styles.card}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.cards}>
            <div className={styles.main}>
              <div className={styles.textmain}>Join Us Today
              </div>
              <div className={styles.cardmain}>
                <div className={styles.maintext}>
                  <p className={styles.text}>
                  Whether you’re looking for a traditional relationship or something modern, we are here to support your preferences and make your dreams come true.

Let [Your Matrimony Website Name] help you find the love and companionship you deserve. Register now and take the first step toward a lifetime of happiness.
                  </p>
                  <div className={styles.navigation}>
                    <button
                      className={styles.navButton}
                      onClick={handlePrev} // Change image to the previous one
                    >
                      ←
                    </button>
                    <button
                      className={styles.navButton}
                      onClick={handleNext} // Change image to the next one
                    >
                      →
                    </button>
                  </div>
                </div>
                <div className={styles.containermain}>
                  <div className={styles.imageContainer}>
                    <img
                      src={images[currentIndex]} // Display current image
                      alt={`Slide ${currentIndex + 1}`}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* <h4>Lorem ipsum</h4> */}
          <div className={styles.dolor}>
          At [Your Matrimony Website Name], we’re committed to making your journey to find the perfect partner as seamless and 
          meaningful as possible. Here’s why millions trust us as their preferred matchmaking platform:
          </div>
          <div className={styles.textmains}>
          <div className={styles.profile}>Verified Profiles</div>
          <div className={styles.profile}>Personalized Matchmaking</div>
          <div className={styles.profile}>Respect for Diversity</div>
          <div className={styles.profile}>Seamless User Experience</div>
          <div className={styles.profile}>Privacy and Security</div>
          <div className={styles.profile}>Success Stories</div>
          <div className={styles.profile}>Expert Assistance</div>
          </div>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started</button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionmain;
