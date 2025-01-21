import React from 'react';
import styles from './Abouthero.module.css';
import image1 from '../../about/image/image3.jpg';
import image2 from '../../about/image/image5.png';

function Abouthero() {
  return (
    <div className={styles.container}>
      <div className={styles.flowerContainer}>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={styles.flower}
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img src={image1} alt="Couple" className={styles.image} />
          {/* <div className={styles.flowerContainer}>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={styles.flower}
            style={{ backgroundImage: `url(${image2})` }}
          ></div>
        ))}
        </div> */}
        </div>
        <div className={styles.textContainer}>
          <div className={styles.title}>FIND YOUR</div>
          <div className={styles.subtitle}>Best Match</div>
          <p className={styles.description}>
            A Best Match Couple exemplifies a perfect blend of love, respect, and compatibility. They thrive together by nurturing their
            bond, growing individually, and supporting each other in every phase of life. Their relationship is a testament to the beauty
            of a well-matched partnership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Abouthero;
