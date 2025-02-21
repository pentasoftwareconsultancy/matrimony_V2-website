import React, { useState, useEffect } from "react";
import VendorList from "../../Components/venders/vendorslist/Vendorslist";
import Venderhero from "../../Components/venders/venderhero/Venderhero";  // Correctly importing Venderhero

const VendorPage = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/vendors");
        const data = await response.json();
        if (data.success) {
          setVendors(data.data); // Populate vendors list
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
    <div>
      <Venderhero /> {/* Rendering the Venderhero component */}
      <VendorList vendors={vendors} />
    </div>
  );
};

export default VendorPage;
