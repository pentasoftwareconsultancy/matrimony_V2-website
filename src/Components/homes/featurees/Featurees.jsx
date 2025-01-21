import React, { useEffect } from 'react';
import styles from'./Featurees.module.css';

function Featurees() {
    const featureTexts = [
        "Personalized attention is given to each profile.",
        "All profiles are verified and authentic.",
        "The database includes profiles from all over the world.",
        "High-quality database of eligible individuals of all ages.",
        "Individualized assistance is offered throughout the process.",
        "Strict confidentiality of information is maintained.",
        "One-time nominal registration fee is applicable.",
        "Pioneers in research on Maharashtrian wedding industry.",
      ];
    
      useEffect(() => {
        const featureItems = document.querySelectorAll(`.${styles.featureItem}`);
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
            } else {
              entry.target.classList.remove(styles.visible);
            }
          });
        }, {
          threshold: 0.5
        });
    
        featureItems.forEach(item => observer.observe(item));
    
        return () => {
          featureItems.forEach(item => observer.unobserve(item));
        };
      }, []);
    
      return (
        <div className={styles.container}>
          <div className="row">
            <div className="col-lg-12">
              <h2 className={styles.sectionTitle}>Reasons why you will find the PERFECT match on lagnagath.in</h2>
            </div>
          </div>
    
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.featuresDivWrap}>
                <ul className={styles.featuresUl}>
                  {featureTexts.map((text, index) => (
                    <li key={index} className={`${styles.featureItem} d-flex align-items-center`}>
                      <div className={styles.featuresText}>{text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
export default Featurees;
