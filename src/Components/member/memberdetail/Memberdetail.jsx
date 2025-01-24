import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MemberDetail.module.css";

const MemberDetail = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/sanchalaks/${id}`);
        const data = await response.json();
        if (data.success) {
          setMember(data.data);
        } else {
          setError(data.message || "Failed to fetch member details.");
        }
      } catch (err) {
        setError("Error fetching member: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMember();
  }, [id]);

  if (loading) return <p>Loading member details...</p>;
  if (error) return <p>{error}</p>;

  if (!member) {
    return <p>Member not found!</p>;
  }

  return (
    <div className={styles.detail}>
      <div className={styles.main}>
        <div className={styles.deta}>
          <div className={styles.name}>{member.name}</div>
          <div className={styles.description}>{member.description}</div>
        </div>
        <img src={member.image} alt={member.name} className={styles.image} />
      </div>
      <h2 className={styles.name}>{member.name}</h2>
      <div className={styles.info}>
        <p>
          <strong>Age:</strong> {member.age}
        </p>
        <p>
          <strong>Gender:</strong> {member.gender}
        </p>
        <p>
          <strong>Occupation:</strong> {member.occupation}
        </p>
        <p>
          <strong>Company:</strong> {member.company}
        </p>
        <p>
          <strong>Location:</strong> {member.location}
        </p>
        <p>
          <strong>Interests:</strong> {member.interests.join(", ")}
        </p>
        <p>
          <strong>Role:</strong> {member.role}
        </p>
      </div>
    </div>
  );
};

export default MemberDetail;
