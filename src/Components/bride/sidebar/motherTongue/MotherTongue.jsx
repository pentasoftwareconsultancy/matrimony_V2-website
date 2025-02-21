import React, { useState } from "react";
import styles from "./MotherTongue.module.css";

const MotherTongue = ({ handleFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.main}>
      <div className={styles.mother}>
        Mother Tongue
        <button className={styles.language} onClick={toggleDropdown}>
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {/* All option */}
          <label className={styles.mainradio}>
            <input
              type="radio"
              value=""
              name="motherTongue"
              onChange={(e) =>
                handleFilterChange("selectedMotherTongue", e.target.value)
              }
              className={styles.radio}
            />
            All
          </label>

          {/* Other language options */}
          {[
            "Marathi",
            "Hindi",
            "Konkani",
            "Gujarati",
            "Urdu",
            "Bhojpuri",
            "Kannada",
            "Tamil",
            "Malayalam",
          ].map((language) => (
            <label key={language} className={styles.mainradio}>
              <input
                type="radio"
                value={language.toLowerCase()}
                name="motherTongue"
                onChange={(e) =>
                  handleFilterChange("selectedMotherTongue", e.target.value)
                }
                className={styles.radio}
              />
              {language}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MotherTongue;
