import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import image1 from "../hero/images/slide11.jpg"
import image2 from "../hero/images/slide2.jpg"
import image3 from "../hero/images/slide4.jpg"
import image4 from "../hero/images/slide1.jpg"
import image5 from "../hero/images/slide2.jpg"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: image1,
      title: "Empower Change",
      subtitle: "Together we can make a difference.",
    },
    {
      image:image2,
      title: "Inspire Hope",
      subtitle: "Your contribution matters.",
    },
    {
      image: image3,
      title: "Support Communities",
      subtitle: "Building a better future.",
    },
    {
      image: image4,
      title: "Educate Minds",
      subtitle: "Education transforms lives.",
    },
    {
      image: image5,
      title: "Spread Kindness",
      subtitle: "Small actions, big impact.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.hero}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
            <div className={styles.textOverlay}>
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
