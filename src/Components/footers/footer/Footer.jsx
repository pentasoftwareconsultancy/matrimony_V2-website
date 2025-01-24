import React from "react";
import styles from "./Footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import logo from "./abks logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          
            <img src={logo} alt="Logo" className={styles.logoImage} />
{/*           
          <p>
            Find your perfect match with us – where love meets destiny. Explore
            a world of trusted connections and meaningful relationships. Your
            journey to forever begins here, with us by your side every step of
            the way.
          </p> */}
        </div>

        <div className={styles.section}>
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Bride</li>
            <li>Groom</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Quick Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Reading</li>
            <li>Pages</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3>Services</h3>
          <ul>
            <li>News</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Login </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.text}>
          {" "}
          <FaLocationDot />: 2022 Grance Template - All Rights Reserved
        </p>
        <p className={styles.phone}>
          <FaPhoneAlt />: 5768797999
        </p>
        <p className={styles.email}>
          <MdEmail />: nexuxctc2020@gmail.com
        </p>
        <div className={styles.icons}>
          <span className={styles.iconinsta}>
            <FaInstagram />
          </span>
          <span className={styles.iconFaFacebook}>
            <LiaFacebook />
          </span>
          <span className={styles.icontwitter}>
            <FaXTwitter />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
