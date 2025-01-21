import React from "react";
import { useParams } from "react-router-dom";
import eventsData from "../eventsdata/Eventdata";  // Ensure the path is correct
import styles from "./Eventsdetail.module.css";

const Eventsdetail = () => {
  const { id } = useParams();
  const event = eventsData.find((item) => item.id === parseInt(id, 10));

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className={styles.cardDetail}>
      <h1>{event.title}</h1>
      <div className={styles.eventContent}>
        
        <img src={event.image} alt={event.title} className={styles.image} />
        <div className={styles.textContent}>
          
          <p className={styles.description}>{event.description}</p>  {/* Event description */}
          <p className={styles.content}>{event.content || "No additional details available."}</p> {/* Event content */}
          <p className={styles.eventDetails}><strong>Event Type:</strong> {event.eventType}</p> {/* Event type */}
          <p className={styles.eventDetails}><strong>Agenda:</strong> {event.agenda}</p> {/* Event agenda */}
          
          {/* Event Date and Time */}
          <p className={styles.eventDetails}><strong>Date:</strong> {event.date}</p>
          <p className={styles.eventDetails}><strong>Time:</strong> {event.time}</p>
          <p className={styles.eventDetails}><strong>Place:</strong> {event.place}</p>
        </div>
      </div>

      {/* Display participants' data */}
      <h3 className={styles.participantTitle}>Participants:</h3>
      {event.participants && event.participants.length > 0 ? (
  <div className={styles.participantsGrid}>
    {event.participants.map((participant, index) => (
      <div key={index} className={styles.participant}>
        <h4>{participant.fullName}</h4>
        <p><strong>Age:</strong> {participant.age}</p>
        <p><strong>Gender:</strong> {participant.gender}</p>
        <p><strong>Occupation:</strong> {participant.occupation}</p>
        <p><strong>Company:</strong> {participant.company}</p>
        <p><strong>Location:</strong> {participant.location}</p>
        <p><strong>Interests:</strong> {participant.interests}</p>
        <p><strong>Role:</strong> {participant.role}</p>
        <p><strong>Attendance Confirmed:</strong> {participant.attendanceConfirmed ? "Yes" : "No"}</p>
        <p><strong>Feedback:</strong> {participant.feedback}</p>
      </div>
    ))}
  </div>
) : (
  <p>No participants listed for this event.</p>
)}
    </div>
  );
};

export default Eventsdetail;
