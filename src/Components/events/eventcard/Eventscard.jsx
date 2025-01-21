import React from "react";
import { Link } from "react-router-dom";
import styles from "./Eventscard.module.css";

const Eventscard = ({ event }) => {
  const { id, title, description, author, content, image, date, time } = event;

  return (

    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>By: {date}</p>
        <p className={styles.time}>{time}</p>
        <p className={styles.text}>{description}</p>
        <Link to={`/event-detail/${id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Eventscard;
