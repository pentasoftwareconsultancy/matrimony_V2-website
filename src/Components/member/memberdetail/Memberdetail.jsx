import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import members from '../memberdata/Memberdata';
import styles from './MemberDetail.module.css';

const MemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = members.find((m) => m.id === parseInt(id, 10));

  if (!member) {
    return <p>Member not found!</p>;
  }

  return (
    <div className={styles.detail}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        &larr; Back
      </button>
      <img src={member.image} alt={member.name} className={styles.image} />
      <h2 className={styles.name}>{member.name}</h2>
      <h4 className={styles.title}>{member.title}</h4>
      <p className={styles.bio}>{member.bio}</p>
    </div>
  );
};

export default MemberDetail;
