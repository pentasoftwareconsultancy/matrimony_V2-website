import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Eventsdetail.module.css";

const Eventsdetail = () => {
  const { id } = useParams(); // Get event ID from URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/events/${id}`);
        const data = await response.json();
        if (data.success) {
          setEvent(data.data); // Populate event details
        } else {
          setError(data.message || "Failed to fetch event details.");
        }
      } catch (err) {
        setError("Error fetching event: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.cardDetail}>
      <h1>{event.name}</h1>
      <div className={styles.eventContent}>
        <img
          src={event.imageUrl || "https://via.placeholder.com/300"}
          alt={event.name}
          className={styles.image}
        />
        <div className={styles.textContent}>
          <p className={styles.description}>{event.description}</p>
          <p className={styles.eventDetails}>
            <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
          </p>
          <p className={styles.eventDetails}>
            <strong>Location:</strong> {event.location}
          </p>
          <p className={styles.eventDetails}>
            <strong>Organizer:</strong> {event.organizer || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eventsdetail;
