import React, { useState } from 'react';
import styles from './Login.module.css';
import logo from "../image/login.svg";
import img from "../image/logo2.webp";
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Toggle password visibility
  };

  return (
    <div className={styles.main}>
      <div className={styles.cantainars1}>
        <img src={img} className={styles.image} alt="Logo" />
      </div>
      <div className={styles.cantainars2}>
        <div className={styles.login}>
          <h1 className={styles.logos}>LOGO</h1>
          <form className={styles.mainform}>
            <h2>Login</h2>
            <input type="text" placeholder="Mobile Number/Nest ID" />
            
            {/* Password input with show/hide functionality */}
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? 'text' : 'password'} // Toggle between text and password
                placeholder="Password"
              />
              <span
                className={styles.toggle}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? '🙈' : '👁️'} {/* Show or hide password symbol */}
              </span>
            </div>

            <div className={styles.forgotPassword}>
              <a href="/">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
            <button type="button">Login with OTP</button>
            <div className={styles.register}>
              <span>New User?</span>
              <Link to ='/register'><a>Register Free</a></Link>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
