import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Vendorsdetail.module.css";
import vendors from "../vendorsdata/Vendorsdata"; // Vendors data imported here

const VendorDetail = () => {
  const { id } = useParams();
  const vendor = vendors.find((item) => item.id === parseInt(id, 10));

  if (!vendor) {
    return <p>Vendor not found.</p>;
  }

  return (
    <div className={styles.cardDetail}>
      <h1>{vendor.title}</h1>
      <div className={styles.eventContent}>
        <img src={vendor.image} alt={vendor.title} className={styles.image} />
        <div className={styles.textContent}>
          <p className={styles.description}>{vendor.description}</p>
          <p className={styles.content}>{vendor.content}</p>
          <p>
            <strong>Agenda:</strong> {vendor.agenda}
          </p>
          <p>
            <strong>Date:</strong> {vendor.date}
          </p>
          <p>
            <strong>Time:</strong> {vendor.time}
          </p>
          <p>
            <strong>Place:</strong> {vendor.place}
          </p>
        </div>
      </div>

      <h3 className={styles.participantTitle}>Participants:</h3>
      {vendor.participants && vendor.participants.length > 0 ? (
        <div className={styles.participantsGrid}>
          {vendor.participants.map((participant, index) => (
            <div key={index} className={styles.participant}>
              <h4>{participant.fullName}</h4>
              <p>
                <strong>Age:</strong> {participant.age}
              </p>
              <p>
                <strong>Gender:</strong> {participant.gender}
              </p>
              <p>
                <strong>Interests:</strong> {participant.interests}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No participants listed for this vendor.</p>
      )}
    </div>
  );
};

export default VendorDetail;
