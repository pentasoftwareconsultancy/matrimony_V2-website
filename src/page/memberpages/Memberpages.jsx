import React from 'react';
// import Memberlist from '../../Components/member/memberlist';
import styles from './Memberpage.module.css';
import MemberList from '../../Components/member/memberlist/Memberlist';

const MemberPage = () => {
  return (
    <div className={styles.memberPage}>
      <h1 className={styles.title}>Committee Members</h1>
      <MemberList />
    </div>
  );
};

export default MemberPage;
