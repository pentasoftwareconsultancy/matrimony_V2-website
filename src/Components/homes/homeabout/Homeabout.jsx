import React from 'react'
import styles from "./Homeabout.module.css"
import image from "../../homes/hero/images/slide1.jpg"
function Homeabout() {
  return (
  
        <div className={styles.container}>
            {/* <div className={styles.images}> */}
          <img src={image} alt={image} className={styles.image} />
          {/* </div> */}
          <div className={styles.content}>
            <h2>About Lagnagath</h2>
            <p>
              Lagnagath is a trusted online marriage bureau founded by Mrs. Vaishali
              Pravin Chitre from Pune, India. The bureau provides matchmaking
              services for eligible boys and girls around the world, with a
              particular focus on the Maharashtrian community, mainly hailing from
              the CKP, Brahmin, GSP, Pathare Prabhu, Vishyawani and Maratha
              communities. All the registered profiles are duly verified by our
              backend team. The team at Lagnagath is managed professionally by
              experts who are well-versed in horoscope matching and keep themselves
              abreast of current trends and expectations from both, the bride and
              the groom.
            </p>
            <button className={styles.button}>View More</button>
          </div>
        </div>
      );
    };

export default Homeabout;