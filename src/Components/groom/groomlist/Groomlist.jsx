import React from "react";
import styles from "./Groomlist.module.css";
import { Link } from "react-router-dom";
import Groomdata from "../biodata/Biodata";

const Groomlist = () => {
  return (
    <div className={styles.list}>
      {Groomdata.map((data, index) => (
        <Link to={`/profilegroom/${index}`} key={index} className={styles.cardLink}>
          {/* Pass data as a prop to Groomprofile */}
          <div className={styles.card}>
            <img src={data.image} alt={data.name} className={styles.avatar} />
            <h3>{data.name}</h3>
            <p>{data.job}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Groomlist;
