import React, { useState } from "react";
import { locations, categories } from "../eventherodata/Eventherodata"; // Import data
import styles from "./Eventfilter.module.css";

const Eventfilter = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search Event</h2>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Find your next event"
          className={styles.input}
        />
        <select
          className={styles.dropdown}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Event Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select
          className={styles.dropdown}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Event Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className={styles.button}>Search Now</button>
      </div>
      <p className={styles.footer}>Discover 24 Upcoming Events</p>
    </div>
  );
};

export default Eventfilter;
