import { useEffect, useState } from "react";
import EventCard from "../../Components/events/eventCard/EventCard";
import styles from "./Eventspages.module.css";
import Eventshero from "../../Components/events/eventshero/Eventshero";
import Eventfilter from "../../Components/events/eventfilter/Eventfilter";

const Eventspages = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filter states
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // State for unique locations and categories from events
  const [locations, setLocations] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/events");
        const data = await response.json();
        if (data.success) {
          setEvents(data.data);
          setFilteredEvents(data.data); // Initially show all events

          // Extract unique locations and categories from events
          const uniqueLocations = [...new Set(data.data.map(event => event.location))];
          const uniqueCategories = [...new Set(data.data.map(event => event.category))];

          setLocations(uniqueLocations); // Set unique locations
          setCategories(uniqueCategories); // Set unique categories
        } else {
          setError(data.message || "Failed to fetch events.");
        }
      } catch (err) {
        setError("Error fetching events: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Apply filters to events
  useEffect(() => {
    const filtered = events.filter((event) => {
      const matchesLocation = selectedLocation
        ? (event.location || "").toLowerCase() === selectedLocation.toLowerCase()
        : true;
      const matchesCategory = selectedCategory
        ? (event.category || "").toLowerCase() === selectedCategory.toLowerCase()
        : true;
      const matchesQuery =
        (event.name && event.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (event.description && event.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesLocation && matchesCategory && matchesQuery;
    });
    setFilteredEvents(filtered);
  }, [events, selectedLocation, selectedCategory, searchQuery]);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <Eventshero />
      <Eventfilter
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleSearch={handleSearch}
        locations={locations} // Pass locations
        categories={categories} // Pass categories
      />
      <h1 className={styles.heading}>Upcoming Events</h1>
      <div className={styles.eventGrid}>
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Eventspages;
