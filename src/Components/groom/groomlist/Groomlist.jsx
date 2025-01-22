import React from "react";
import styles from "./Groomlist.module.css";
import { Link } from "react-router-dom";
import Groomprofile from "../groomprofile/Groomprofile";
import Groomdata from "../biodata/Biodata";

const Groomlist = () => {
  return (
    <div className={styles.list}>
      {Groomdata.map((profile, index) => {  
        console.log(profile); // Check if profile is correctly passed
        return (
          <Link to={`/profilegroom/${index}`} key={index}>
            <Groomprofile profile={profile} />
          </Link>
        );
      })}
    </div>
  );
};

export default Groomlist;
