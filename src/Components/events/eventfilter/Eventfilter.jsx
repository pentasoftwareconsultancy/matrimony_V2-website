import React from "react";
import styles from "./Eventfilter.module.css";

const Eventfilter = ({ selectedLocation, setSelectedLocation, selectedCategory, setSelectedCategory, handleSearch, locations, categories }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search Event</h2>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Find your next event"
          className={styles.input}
          onChange={(e) => handleSearch(e.target.value)} // Handle text search
        />
        <select
          className={styles.dropdown}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Event Location</option>
          {locations && locations.map((location, index) => (
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
          {categories && categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className={styles.button}>Search Now</button>
      </div>
      <p className={styles.footer}>Discover {locations.length} Upcoming Events</p>
    </div>
  );
};

export default Eventfilter;
