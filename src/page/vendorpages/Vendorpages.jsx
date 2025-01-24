import { useEffect, useState } from "react";
import VendorList from "../../Components/venders/vendorslist/Vendorslist";
import styles from "./Vendorpages.module.css";

const Vendorpages = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch vendors from the backend
  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/vendors");
        const data = await response.json();
        if (data.success) {
          setVendors(data.data); // Populate vendors from API response
        } else {
          setError(data.message || "Failed to fetch vendors.");
        }
      } catch (err) {
        setError("Error fetching vendors: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVendors();
  }, []);

  if (loading) return <p>Loading vendors...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <VendorList vendors={vendors} />
    </div>
  );
};

export default Vendorpages;
