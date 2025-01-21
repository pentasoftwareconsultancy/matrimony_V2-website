import React from "react";
import styles from "./Groommain.module.css"
import Rifinesearch from "../../bride/refinesearch/Refinesearch";
import Groomprofile from "../groomprofile/Groomprofile";

function Groommain() {
 
  return (
    <div>
       <div className={styles.Bridemain}>
        <div className={styles.main}><Rifinesearch/></div>
        <div className={styles.containmain}>
            <div className={styles.containar}><Groomprofile/></div>
            <div className={styles.containar1}></div>
        </div>
    </div>
    </div>
  );
}

export default Groommain;
