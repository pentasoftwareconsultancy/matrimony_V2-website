import { useEffect, useState } from "react";
import EventCard from "../../Components/events/eventCard/EventCard";
import styles from "./Eventspages.module.css";
import Eventshero from "../../Components/events/eventshero/Eventshero";
import Eventfilter from "../../Components/events/eventfilter/Eventfilter";

const Eventspages = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/events");
        const data = await response.json();
        if (data.success) {
          setEvents(data.data);
        } else {
          setError(data.message || "Failed to fetch events.");
        }
      } catch (err) {
        setError("Error fetching events: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <Eventshero />
      <Eventfilter />
      <h1 className={styles.heading}>Upcoming Events</h1>
      <div className={styles.eventGrid}>
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Eventspages;
