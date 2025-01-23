import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MemberCard.module.css';

const MemberCard = ({ member }) => {
  return (
    <Link to={`/members/${member.id}`} className={styles.card}>
      <img src={member.image} alt={member.name} className={styles.image} />
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.title}>{member.title}</p>
    </Link>
  );
};

export default MemberCard;
