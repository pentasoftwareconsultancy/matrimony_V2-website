import React from "react";
import { Link } from "react-router-dom";
import styles from "./VendorCard.module.css";

const VendorCard = ({ vendor = {} }) => {
  const { id, title, description, image, date, time } = vendor;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>Date: {date}</p>
        <p className={styles.time}>Time: {time}</p>
        <p className={styles.description}>{description}</p>
        <Link to={`/vendor-detail/${id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default VendorCard;
