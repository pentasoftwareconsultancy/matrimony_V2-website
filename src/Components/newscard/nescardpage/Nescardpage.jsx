import React from "react";
import { useParams } from "react-router-dom";
import newData from "../newdata/Newdata"; // Import data
import styles from "./Newcardpage.module.css"; // Styling for the card details page

const Newcardpage = () => {
  const { id } = useParams(); // Get the card ID from the URL
  const card = newData.find((item) => item.id === parseInt(id, 10)); // Find the card by ID

  if (!card) {
    return <div>Card not found!</div>;
  }

  return (
    <div className={styles.cardDetail}>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} className={styles.image} />
      <p>{card.content}</p>
      <p>By: {card.author}</p>
    </div>
  );
};

export default Newcardpage;
