import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../Components/navbar/logo.png"
const Navbar = ({ isHomePage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle menu for mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.navbar}>
        {/* Logo */}
        {/* <div className={styles.logo}> */}
          
        <a className={styles.logoContainer}>
  <img src={logo} className={styles.logoImage} alt="Logo" />
</a>
        {/* </div> */}

        {/* Navigation Links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          

          {/* Other Navigation Links */}
          <Link to="/" className={isHomePage ? styles.whiteText : styles.blackText}>
            Home
          </Link>
          <Link to="/about" className={isHomePage ? styles.whiteText : styles.blackText}>
            About
          </Link>
          <Link to="/bride" className={isHomePage ? styles.whiteText : styles.blackText}>
            Bride
          </Link>
          <Link to="/groommain" className={isHomePage ? styles.whiteText : styles.blackText}>
            Groom
          </Link>
        




          {/* Services Dropdown */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
            <Link to="#" className={isHomePage ? styles.whiteText : styles.blackText}>
              Services
            </Link>
            {dropdownVisible && (
             <div className={styles.dropdownMenu}>
             <Link to="/events" className={isHomePage ? styles.whiteText : styles.blackText}>
               Events
             </Link>
             <Link to="/vendors" className={isHomePage ? styles.whiteText : styles.blackText}>
               Vendors
             </Link>
             {/* <Link to="/news" className={isHomePage ? styles.whiteText : styles.blackText}>
               News
             </Link> */}
             <Link to="/blog" className={isHomePage ? styles.whiteText : styles.blackText}>
               Blogs
             </Link>
           </div>
            )}
          </div>

          <Link to="/member" className={isHomePage ? styles.whiteText : styles.blackText}>
            Committee Members
          </Link>
          <Link to="/contact" className={isHomePage ? styles.whiteText : styles.blackText}>
            Contact
          </Link>
        </nav>

        {/* Log In Button */}
        <div className={styles.login}>
          <Link to="/login" className={isHomePage ? styles.whiteText : styles.blackText}>
            Log In
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
