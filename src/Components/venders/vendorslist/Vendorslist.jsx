import React from "react";
import VendorCard from "../VendorCard/VendorCard";
import styles from "./VendorList.module.css";
import vendors from "../vendorsdata/Vendorsdata";

const VendorList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default VendorList;
