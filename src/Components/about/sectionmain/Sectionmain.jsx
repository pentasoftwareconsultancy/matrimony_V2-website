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
              <div className={styles.textmain}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <div className={styles.cardmain}>
                <div className={styles.maintext}>
                  <p className={styles.text}>
                    Nunc tempus magna ante, id tristique augue convallis sit
                    amet. Pellentesque eleifend ipsum ac nibh lobortis, ac
                    feugiat elit aliquam. Mauris ac erat non nibh consectetur
                    commodo.
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
          <h4>Lorem ipsum</h4>
          <div className={styles.dolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            volutpat elit vitae lorem egestas, et consequat tellus tincidunt.
          </div>
          <div className={styles.textmains}>
            Nunc tempus magna ante, id tristique augue convallis sit amet,
            elementum eleifend ipsum ac nibh lobortis, ac feugiat elit aliquam.
            Mauris ac erat non nibh consectetur volutpat libero a hendrerit.
            Aliquam sit amet lectus risus. Donec malesuada vitae velit et amet
            commodo. Quisque id rutrum libero.
          </div>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>Get Started</button>
            <button className={styles.secondaryButton}>Second Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionmain;
