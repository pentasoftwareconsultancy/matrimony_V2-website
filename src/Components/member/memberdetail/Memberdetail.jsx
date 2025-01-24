import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import members from '../memberdata/Memberdata';
import styles from './MemberDetail.module.css';
import Membersroling from '../membersroling/Membersroling';

const MemberDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const member = members.find((m) => m.id === parseInt(id, 10));

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
<div className={styles.sroling}><Membersroling/></div>
      <div className={styles.info}>
            <p><strong>Age:</strong> {member.age}</p>
            <p><strong>Gender:</strong> {member.gender}</p>
            <p><strong>Occupation:</strong> {member.occupation}</p>
            <p><strong>Company:</strong> {member.company}</p>
            <p><strong>Location:</strong> {member.location}</p>
            <p><strong>Interests:</strong> {member.interests.join(', ')}</p>
            <p><strong>Role:</strong> {member.role}</p>
            <p><strong>Attendance Confirmed:</strong> {member.attendanceConfirmed ? 'Yes' : 'No'}</p>
            <p><strong>Feedback:</strong> {member.feedback}</p>
            <p><strong>Education:</strong> {member.education}</p>
            <p><strong>Political Career:</strong> {member.politicalCareer}</p>
            <p><strong>Achievements:</strong></p>
            <ul>
              {member.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            <p><strong>Follow on Social Media:</strong></p>
            <ul>
              <li><a href={member.socialMedia.twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href={member.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
          </div>

      
      <h4 className={styles.title}>{member.title}</h4>
      <p className={styles.bio}>{member.bio}</p>
    </div>
  );
};

export default MemberDetail;
