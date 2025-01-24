import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MemberCard.module.css';

const MemberCard = ({ member }) => {
  return (
    <Link to={`/members/${member.id}`} className={styles.card}>
        <div className={styles.cardmain}>
      <img src={member.image} alt={member.name} className={styles.image} />
      </div>
      <div className={styles.maintext}>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.title}>{member.title}</p>
      <p className={styles.email}>{member.mobile}</p>
      <p className={styles.email}>{member.email}</p>
      </div>
    </Link>
  );
};

export default MemberCard;
