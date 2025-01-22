import React from "react";
import eventsData from "../../Components/events/eventsdata/Eventdata";
import EventCard from "../../Components/events/eventcard/Eventscard";
import styles from "./Eventspages.module.css"; 
import Eventshero from "../../Components/events/eventshero/Eventshero";
import Eventfilter from "../../Components/events/eventfilter/Eventfilter";
const Eventspages = () => {
  return (
    
    <div className={styles.container}>
      <Eventshero/>
      <Eventfilter/>
      <h1 className={styles.heading}>Upcoming Events</h1>
      <div className={styles.eventGrid}>
        {eventsData.map((event) => (
          <EventCard key={event.id} event={event} onClick={() => console.log(event)} />
        ))}
      </div>
    </div>
  );
};

export default Eventspages;
