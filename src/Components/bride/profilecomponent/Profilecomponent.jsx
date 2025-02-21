import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import styles from "./ProfileComponent.module.css";

const ProfileComponent = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/bride-groom/${id}`
        );
        const data = await response.json();
        if (data.success) {
          // Format the date here before setting the profile state
          data.data.dateOfBirth = formatDate(data.data.dateOfBirth);
          setProfile(data.data);
        } else {
          setError(data.message || "Failed to fetch profile.");
        }
      } catch (err) {
        setError("Error fetching profile: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  const handleDownload = () => {
    const element = document.getElementById("profileContent");
    if (element) {
      const options = {
        margin: 0.5,
        filename: `${profile.fullName}_profile.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      html2pdf().from(element).set(options).save();
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <div className={styles.text}>{profile.fullName}</div>
        <div className={styles.actions}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            <FaDownload />
            Download as PDF
          </button>
        </div>
      </div>

      <div id="profileContent" className={styles.profileContent}>
        <div className={styles.main}>
          <div className={styles.manicard}>
            <div className={styles.imageSection}>
              <img
                src={profile.profilePhoto || "https://via.placeholder.com/150"}
                alt="Profile"
                className={styles.profileImage}
              />
            </div>
          </div>
          <div className={styles.maintext}>
            <div className={styles.detailsSection}>
              <h2>Personal Details</h2>
              <p><strong>Full Name:</strong> {profile.fullName}</p>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Mobile Number:</strong> {profile.mobileNumber}</p>
              <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p>
              <p><strong>City:</strong> {profile.city}</p>
              <p><strong>Gender:</strong> {profile.gender}</p>
              <p><strong>Height:</strong> {profile.height}</p>
              <p><strong>Weight:</strong> {profile.weight}</p>
              <p><strong>Body Type:</strong> {profile.bodyType}</p>
              <p><strong>Complexion:</strong> {profile.complexion}</p>
              <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
              <p><strong>Smoke:</strong> {profile.smoke ? "Yes" : "No"}</p>
              <p><strong>Drink:</strong> {profile.drink ? "Yes" : "No"}</p>
              <p><strong>Special Case:</strong> {profile.specialCase}</p>
            </div>

            <div className={styles.educationSection}>
              <h2>Education and Career</h2>
              <p><strong>Education Level:</strong> {profile.educationLevel}</p>
              <p><strong>Field:</strong> {profile.educationField}</p>
              <p><strong>Description:</strong> {profile.educationDescription}</p>
              <p><strong>Occupation:</strong> {profile.occupation}</p>
              <p><strong>Company Name:</strong> {profile.companyName}</p>
              <p><strong>Residency Status:</strong> {profile.residencyStatus}</p>
              <p><strong>Annual Income:</strong> {profile.annualIncome}</p>
            </div>

            <div className={styles.familySection}>
              <h2>Family Information</h2>
              <p><strong>Father's Name:</strong> {profile.fatherName}</p>
              <p><strong>Father's Occupation:</strong> {profile.fatherOccupation}</p>
              <p><strong>Mother's Name:</strong> {profile.motherName}</p>
              <p><strong>Mother's Occupation:</strong> {profile.motherOccupation}</p>
              <p><strong>Brothers:</strong> {profile.brothers}</p>
              <p><strong>Sisters:</strong> {profile.sisters}</p>
              <p><strong>Cultural Values:</strong> {profile.culturalValues}</p>
              <p><strong>About Family:</strong> {profile.aboutFamily}</p>
            </div>

            <div className={styles.patrikaSection}>
              <h2>Patrika Details</h2>
              <p><strong>Mother Tongue:</strong> {profile.motherTongue}</p>
              <p><strong>Religion:</strong> {profile.religion}</p>
              <p><strong>Time of Birth:</strong> {profile.timeOfBirth}</p>
              <p><strong>City of Birth:</strong> {profile.cityOfBirth}</p>
              <p><strong>Gotra:</strong> {profile.gotra}</p>
              <p><strong>Ras:</strong> {profile.ras}</p>
              <p><strong>Gan:</strong> {profile.gan}</p>
              <p><strong>Nadi:</strong> {profile.nadi}</p>
              <p><strong>Charan:</strong> {profile.charan}</p>
            </div>

            <div className={styles.partnerSection}>
              <h2>Ideal Partner Preferences</h2>
              <p>
                <strong>Age Range:</strong> {profile.partnerAgeFrom} - {profile.partnerAgeTo}
              </p>
              <p><strong>Education:</strong> {profile.partnerEducation}</p>
              <p><strong>Location:</strong> {profile.partnerLocation}</p>
              <p><strong>Package:</strong> {profile.partnerPackage}</p>
              <p><strong>About Partner:</strong> {profile.partnerAbout}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
