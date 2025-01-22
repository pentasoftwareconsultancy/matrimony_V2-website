import React from "react";
import { Link } from "react-router-dom";
import styles from "./VendorCard.module.css";

const VendorCard = ({ vendor = {} }) => {
  const { id,name, title, description, image, address, phone, date, time } = vendor;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>Name: {name}</p>
        <p className={styles.time}>Phone: {phone}</p>
        <p className={styles.time}>address: {address}</p>
        <p className={styles.description}>{description}</p>
        <Link to={`/vendor-detail/${id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default VendorCard;
