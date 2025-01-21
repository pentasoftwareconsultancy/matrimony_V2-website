import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <div className={styles.logo}>
          {/* <img src={logo} alt="Logo" /> */}
          <a>LOGO</a>
        </div>

        {/* Navigation Links */}
        <nav className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
           <Link to='/'><a>Home</a></Link>
                      <Link to="/about"><a >About</a></Link>
                      <Link to='/bride'>Bride</Link>
                      <Link to='/groom'><a>Groom</a></Link>
                      <Link to= "/events"><a>Events</a></Link>
                      <Link t="/venders"><a>Venders</a></Link>
                      <Link to = "/news"><a >News</a></Link>
                      <Link to="/blog"><a>Blog</a></Link>
                     
                     <Link to="/contact"><a>Contact</a></Link> 
                    </nav>
            
                    {/* Log In Button */}
                    <div className={styles.login}>
                      <Link to="/login"> <a className={styles.loginBtn}>
                        Log In
                      </a></Link>
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
