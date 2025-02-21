import React, { useState } from "react";
import styles from "./Annullncome.module.css";

const AnnualIncome = ({ handleFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const incomeRanges = [
    { label: "All", value: "" },
    { label: "₹0 - ₹5L", value: "500000" },
    { label: "₹5L - ₹10L", value: "1000000" },
    { label: "₹10L - ₹15L", value: "1500000" },
    { label: "₹15L - ₹20L", value: "2000000" },
    { label: "₹20L+", value: "2000001" },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Annual Income
        <button className={styles.toggleButton} onClick={toggleDropdown}>
          {isOpen ? "-" : "+"}
        </button>
      </h3>

      {isOpen && (
        <div className={styles.dropdown}>
          {incomeRanges.map((range) => (
            <label key={range.value} className={styles.radio}>
              <input
                type="radio"
                name="annualIncome"
                value={range.value}
                onChange={(e) =>
                  handleFilterChange("selectedAnnualIncome", e.target.value)
                }
              />
              {range.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnualIncome;
