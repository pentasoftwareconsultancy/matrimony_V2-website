import React from "react";
import styles from "./Blogcard.module.css";
import { Link } from "react-router-dom";

const Blogcard = ({ id, title, author, content, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>By: {author}</p>
        <p className={styles.text}>{content.substring(0, 100)}...</p>
        <Link to={`/blog/${id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Blogcard;
