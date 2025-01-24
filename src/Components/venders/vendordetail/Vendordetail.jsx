import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Vendorsdetail.module.css";

const VendorDetail = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch vendor details from backend
  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/vendors/${id}`);
        const data = await response.json();
        if (data.success) {
          setVendor(data.data); // Populate vendor details
        } else {
          setError(data.message || "Failed to fetch vendor details.");
        }
      } catch (err) {
        setError("Error fetching vendor details: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, [id]);

  if (loading) return <p>Loading vendor details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.cardDetail}>
      <h1>{vendor.title}</h1>
      <div className={styles.eventContent}>
        <img
          src={vendor.image || "https://via.placeholder.com/300"}
          alt={vendor.title}
          className={styles.image}
        />
        <div className={styles.textContent}>
          <p className={styles.description}>{vendor.description}</p>
          <p>
            <strong>Address:</strong> {vendor.address}
          </p>
          <p>
            <strong>Phone:</strong> {vendor.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorDetail;
