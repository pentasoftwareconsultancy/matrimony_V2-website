import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import background from "../images/image1.jpg"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
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
        const response = await fetch(`http://localhost:8000/api/v1/bride-groom/${id}`);
        const data = await response.json();
        if (data.success) {
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
 

  const handleDownload = async () => {
  const doc = new jsPDF("p", "mm", "a4");
  let y = 10; // Initial Y position
  const pageHeight = doc.internal.pageSize.height - 10;

  // Max character limits for specific fields
  const MAX_CHARACTERS = 150;

  // Function to convert an image URL to Base64
  const getBase64Image = async (url) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Handle CORS issues
    return new Promise((resolve, reject) => {
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL("image/png"));
      };
      img.onerror = reject;
      img.src = url;
    });
  };

  // Load and add the background image
  const backgroundImage = await getBase64Image(background);
  doc.addImage(backgroundImage, 'JPEG', 0, 0, 210, 297); // Adding background image to cover A4 size

  // Profile Image Handling
  if (profile.profilePhoto) {
    try {
      const imgData = await getBase64Image(profile.profilePhoto);
      // Image on the left side
      doc.addImage(imgData, "PNG", 10, 20, 90, 100); // Position & Size
      y = 7; // Reset y to align with the text
    } catch (error) {
      console.error("Error loading profile image:", error);
    }
  }

    // Title: Profile Name
    const marginTop = 5;
    y += marginTop;
  
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text(profile.fullName, 90, y); // Adjusted x position (70) to accommodate the image
    y += 20; // Move down for the next content
  
    // Function to add text with pagination support
    const addText = (label, value, xPos = 70) => {
      if (value) {
        // Truncate the text if it exceeds the character limit
        let text = `${label}: ${value}`;
        if (text.length > MAX_CHARACTERS) {
          text = text.slice(0, MAX_CHARACTERS) + "..."; // Truncate and add ellipsis
        }
  
        const splitText = doc.splitTextToSize(text, 130); // Adjust width to fit text next to image
        if (y + splitText.length * 7 > pageHeight) {
          doc.addPage();
          y = 10;
        }
        doc.text(splitText, xPos, y); // Adjust x position (70) to start text next to image
        y += splitText.length * 7;
      }
    };
  // Personal Details
  y -= 10;
doc.setFontSize(14);
doc.setFont("helvetica", "bold");
// Adjusted x position to move the title to the left
doc.text("Personal Details", 130, y); // Change 90 to 50 (or another value to your preference)
y += 10;
doc.setFontSize(12);
doc.setFont("helvetica", "normal");

// Adjusted x position for all the text fields
addText("Name", profile.fullName, 110); // Change 70 to 50 (or another value)
addText("Email", profile.email, 110);
addText("Mobile Number", profile.mobileNumber, 110);
addText("Date of Birth", profile.dateOfBirth, 110);
addText("City", profile.city, 110);
addText("Gender", profile.gender, 110);
addText("Height", profile.height, 110);
addText("Weight", profile.weight, 110);
addText("Body Type", profile.bodyType, 110);
addText("Complexion", profile.complexion, 110);
addText("Blood Group", profile.bloodGroup, 110);
addText("Smoke", profile.smoke ? "Yes" : "No", 110);
addText("Drink", profile.drink ? "Yes" : "No", 110);
addText("Special Case", profile.specialCase, 110);
  
    // Education and Career (Left Column Title)
    y += 10;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Education and Career", 10, y);
    y += 8; // Space below the title
  
    // Education Data under Left Column
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    addText("Education Level", profile.educationLevel, 10);
    addText("Field", profile.educationField, 10);
    addText("Description", profile.educationDescription, 10);
    addText("Occupation", profile.occupation, 10);
    addText("Company Name", profile.companyName, 10);
    addText("Residency Status", profile.residencyStatus, 10);
    addText("Annual Income", profile.annualIncome, 10);
  
    // Add a negative margin to pull the Family Information section up
y -= 55; // This will move the Family Information 10 units up from its current position

// Family Information (Right Column Title)
doc.setFontSize(14);
doc.setFont("helvetica", "bold");
doc.text("Family Information", 110, y - 7); // Adjusted x position for right column title
y += 5; // Space below the title

// Family Data under Right Column
doc.setFontSize(12);
doc.setFont("helvetica", "normal");
addText("Father's Name", profile.fatherName, 110);
addText("Father's Occupation", profile.fatherOccupation, 110);
addText("Mother's Name", profile.motherName, 110);
addText("Mother's Occupation", profile.motherOccupation, 110);
addText("Brothers", profile.brothers, 110);
addText("Sisters", profile.sisters, 110);
addText("Cultural Values", profile.culturalValues, 110);
addText("About Family", profile.aboutFamily, 110);

  
    // Patrika Details (Left Column Title)
    y += 5;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Patrika Details", 10, y);
    y += 10; // Space below the title
  
    // Patrika Data under Left Column
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    addText("Mother Tongue", profile.motherTongue, 10);
    addText("Religion", profile.religion, 10);
    addText("Time of Birth", profile.timeOfBirth, 10);
    addText("City of Birth", profile.cityOfBirth, 10);
    addText("Gotra", profile.gotra, 10);
    addText("Ras", profile.ras, 10);
    addText("Gan", profile.gan, 10);
    addText("Nadi", profile.nadi, 10);
    addText("Charan", profile.charan, 10);
  
    // Ideal Partner Preferences (Right Column Title)
    y -= 65;
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Ideal Partner Preferences", 110, y - 7); // Adjusted x position for right column title
    y += 5; // Space below the title
  
    // Ideal Partner Data under Right Column
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    addText("Age Range", `${profile.partnerAgeFrom} - ${profile.partnerAgeTo}`, 110);
    addText("Education", profile.partnerEducation, 110);
    addText("Location", profile.partnerLocation, 110);
    addText("Package", profile.partnerPackage, 110);
    addText("About Partner", profile.partnerAbout, 110);
  
    // Social Links
    // doc.setFontSize(14);
    // doc.setFont("helvetica", "bold");
    // doc.text("Social Links", 70, y);
    // y += 7;
    // doc.setFontSize(12);
    // doc.setFont("helvetica", "normal");
  
    // if (profile.socialFacebook) {
    //   if (y + 7 > pageHeight) {
    //     doc.addPage();
    //     y = 10;
    //   }
    //   doc.textWithLink("Facebook", 70, y, { url: profile.socialFacebook });
    //   y += 7;
    // }
  
    // if (profile.socialInstagram) {
    //   if (y + 7 > pageHeight) {
    //     doc.addPage();
    //     y = 10;
    //   }
    //   doc.textWithLink("Instagram", 70, y, { url: profile.socialInstagram });
    //   y += 7;
    // }
  
    // if (profile.socialLinkedIn) {
    //   if (y + 7 > pageHeight) {
    //     doc.addPage();
    //     y = 10;
    //   }
    //   doc.textWithLink("LinkedIn", 70, y, { url: profile.socialLinkedIn });
    //   y += 7;
    // }
  
    // Save PDF
    doc.save(`${profile.fullName}_profile.pdf`);
  };
  
  
  
  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.profileContainer}>
      
      <div className={styles.header}>
        <div className={styles.text}></div>
        <div className={styles.actions}>
          <button onClick={handleDownload} className={styles.downloadButton}>
            <FaDownload />
            Download as PDF
          </button>
        </div>
        
      </div>
      <div className={styles.name}> <p><strong></strong> {profile.fullName}</p></div>
      <div id="profileContent" className={styles.profileContent} >
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
              <div className={styles.partner}>
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
              <div className={styles.partner}>
              <p><strong>Father's Name:</strong> {profile.fatherName}</p>
              <p><strong>Father's Occupation:</strong> {profile.fatherOccupation}</p>
              <p><strong>Mother's Name:</strong> {profile.motherName}</p>
              <p><strong>Mother's Occupation:</strong> {profile.motherOccupation}</p>
              <p><strong>Brothers:</strong> {profile.brothers}</p>
              <p><strong>Sisters:</strong> {profile.sisters}</p>
              <p><strong>Cultural Values:</strong> {profile.culturalValues}</p>
              <p><strong>About Family:</strong> {profile.aboutFamily}</p>
              </div>
            </div>

            <div className={styles.patrikaSection}>
              <h2>Patrika Details</h2>
              <div className={styles.partner}>
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
            </div>

            <div className={styles.partnerSection}>
              <h2>Ideal Partner Preferences</h2>
              <div className={styles.partner}>
              <p>
                <strong>Age Range:</strong> {profile.partnerAgeFrom} - {profile.partnerAgeTo}
              </p>
              <p><strong>Education:</strong> {profile.partnerEducation}</p>
              <p><strong>Location:</strong> {profile.partnerLocation}</p>
              <p><strong>Package:</strong> {profile.partnerPackage}</p>
              <p><strong>About Partner:</strong> {profile.partnerAbout}</p>
               
              </div>
            </div>
            {/* <div className={styles.partnerSection}>
            <h2>Social Links</h2>
            <p><a href={profile.socialFacebook} target="_blank" rel="noopener noreferrer"><strong>Facebook :</strong></a></p>
          <p><a href={profile.socialInstagram} target="_blank" rel="noopener noreferrer"><strong>Instagram:</strong></a></p>
          <p><a href={profile.socialLinkedIn} target="_blank" rel="noopener noreferrer"><strong>LinkedIn:</strong></a></p>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
