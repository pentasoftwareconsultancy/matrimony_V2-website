import React, { useState, useEffect } from 'react';
import styles from "./Bridemain.module.css";
import Sidebar from '../sidebar/sidebar/sidebar';
import ProfileList from '../profilelist/Profilelist';
import { useParams } from 'react-router-dom';

function Bridemain() {
  const [query, setQuery] = useState(""); // for text search
  const [profiles, setProfiles] = useState([]);
  
  const [filters, setFilters] = useState({
    selectedCategory: '',
    selectedCity: '',
    selectedMotherTongue: '',
    selectedEducationField: '',
    selectedAnnualIncome: ''
  });

  // Fetch profiles once the component mounts
  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch('http://localhost:8000/api/v1/bride-groom?gender=female');
      const data = await response.json();
      if (data.success) {
        setProfiles(data.data);
      }
    };
    fetchProfiles();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevState => ({
      ...prevState,
      [filterName]: value
    }));
  };

  const filteredProfiles = profiles.filter(profile => {
    const matchesQuery = profile.fullName.toLowerCase().includes(query.toLowerCase()) ||
                          profile.city?.toLowerCase().includes(query.toLowerCase()) ||
                          profile.motherTongue?.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = filters.selectedCategory
      ? profile[filters.selectedCategory]?.toLowerCase().includes(query.toLowerCase())
      : true;

    const matchesCity = filters.selectedCity ? profile.city?.toLowerCase() === filters.selectedCity.toLowerCase() : true;
    const matchesMotherTongue = filters.selectedMotherTongue ? profile.motherTongue?.toLowerCase() === filters.selectedMotherTongue.toLowerCase() : true;
    const matchesEducationField = filters.selectedEducationField ? profile.educationField?.toLowerCase() === filters.selectedEducationField.toLowerCase() : true;
    const matchesAnnualIncome = filters.selectedAnnualIncome ? profile.annualIncome?.toLowerCase() === filters.selectedAnnualIncome.toLowerCase() : true;

    return matchesQuery && matchesCategory && matchesCity && matchesMotherTongue && matchesEducationField && matchesAnnualIncome;
  });

  return (
    <div className={styles.Bridemain}>
      <div className={styles.sidebar}>
        <Sidebar 
          handleFilterChange={handleFilterChange} 
        />
      </div>
      <div className={styles.mainContent}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search profiles..."
          className={styles.searchInput}
        />
        <ProfileList profiles={filteredProfiles} />
      </div>
    </div>
  );
}

export default Bridemain;
