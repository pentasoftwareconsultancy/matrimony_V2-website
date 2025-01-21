import React from 'react';
import styles from './Media.module.css';
import image1 from "../image/image6.jpg"
import image2 from "../image/image4.jpg"
import image3 from "../image/image7.jpg"
import image4 from "../image/image8.jpg"
import image5 from "../image/image9.jpg"
import image6 from "../image/image10.jpg"
const Media = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.section}>
          Now say good-bye to your neighborhood matchmakers, astrological charts, 
          and the numerous dating apps on your phone.
        </div>
        <p className={styles.you}>
          Register online in a matter of minutes and be ready to be DWow’ed by 
          someone you will find for yourself!
        </p>
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.imageGrid}>
      
        <div className={styles.imageWrapper}>
          <img src={image1} alt="Couple 1" className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image2} alt="Couple 2" className={styles.image} />
        </div>
       <div className={styles.main}></div>
       
        <div className={styles.imageWrapper}>
          <img src={image1} alt="Bride 1" className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image4} alt="Couple 3" className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image5} alt="Bride 2" className={styles.image} />
        </div>
      <div className={styles.main}></div>
        <div className={styles.imageWrapper}>
          <img src={image5} alt="Bride 2" className={styles.image} />
        </div>
        <div className={styles.main}></div>
        </div>
      </div>
  
  );
};

export default Media;