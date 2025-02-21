import React from 'react';
import ProfileCard from '../profilecard/Profilecard';
import styles from './Profilelist.module.css';

const ProfileList = ({ profiles }) => {
  return (
    <div className={styles.profileList}>
      {profiles.length > 0 ? (
        profiles.map(profile => (
          <ProfileCard key={profile._id} profile={profile} />
        ))
      ) : (
        <p>No profiles found</p>
      )}
    </div>
  );
};

export default ProfileList;
