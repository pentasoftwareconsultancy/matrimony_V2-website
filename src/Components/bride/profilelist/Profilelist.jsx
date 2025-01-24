import { useEffect, useState } from "react";
import ProfileCard from "../profilecard/Profilecard"; // Import ProfileCard component
import styles from "./Profilelist.module.css"; // Optional CSS for layout

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch profiles from backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/bride-groom?gender=female");
        const data = await response.json();
        if (data.success) {
          setProfiles(data.data);
        } else {
          setError(data.message || "Failed to fetch profiles.");
        }
      } catch (err) {
        setError("Error fetching profiles: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <p>Loading profiles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.profilesContainer}>
      {profiles.map((profile) => (
        <ProfileCard key={profile._id} profile={profile} />
      ))}
    </div>
  );
};

export default Profiles;
