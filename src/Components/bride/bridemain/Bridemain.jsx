import React from 'react'
import styles from "./Bridemain.module.css"
import Refinesearch from '../refinesearch/Refinesearch'
import ProfileList from '../profilelist/Profilelist'
function Bridemain() {
  return (
    <div>
        <div className={styles.Bridemain}>
        <div className={styles.main}><Refinesearch/></div>
        <div className={styles.containmain}>
            <div className={styles.containar}><ProfileList/></div>
            <div className={styles.containar1}></div>
        </div>
    </div>
    </div>
  )
}

export default Bridemain;