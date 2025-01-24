import { Link } from "react-router-dom";
import styles from "./EventCard.module.css"; // Adjusted path

const EventCard = ({ event }) => {
  if (!event) {
    console.error("Missing event data in EventCard.");
    return null;
  }

  const {
    _id,
    name = "Untitled",
    description = "No description",
    imageUrl,
    date,
    location,
  } = event;

  return (
    <div className={styles.card}>
      <img
        src={imageUrl || "https://via.placeholder.com/300"}
        alt={name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.date}>
          {date ? new Date(date).toLocaleDateString() : "No date available"}
        </p>
        <p className={styles.location}>{location}</p>
        <p className={styles.text}>{description}</p>
        <Link to={`/events/${_id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
