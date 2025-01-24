import React, { useEffect, useState } from "react";
import MemberCard from "../membercard/Membercard";
import styles from "./MemberList.module.css";

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/sanchalaks"); // Backend API
        const data = await response.json();
        if (data.success) {
          setMembers(data.data);
        } else {
          setError(data.message || "Failed to fetch members.");
        }
      } catch (err) {
        setError("Error fetching members: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <p>Loading members...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      {members.map((member) => (
        <MemberCard key={member._id} member={member} />
      ))}
    </div>
  );
};

export default MemberList;
