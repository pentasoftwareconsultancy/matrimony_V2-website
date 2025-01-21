import React from "react";
import styles from "./ProfileList.module.css";
import { Link } from "react-router-dom";
// import ProfileCard from "../profilecard/ProfileCard";
import image from "../../bride/images/girl1.webp"
import image1 from "../../bride/images/girl2.webp"
import image2 from "../../bride/images/girl3.jpg"
import image3 from "../../bride/images/girl4.jpg"
import image4 from "../../bride/images/girl5.jpg"
import ProfileCard from "../profilecard/Profilecard";
// import ProfileCard from "../profilecard/Profilecard";
// import ProfileComponent from "../profilecomponent/Profilecomponent";
// import Profilecomponent from "../profilecomponent/Profilecomponent";

const profiles = [
  {
    name: "Priyanka J",
    age: 27,
    height: "5'4\"",
    status: "Never Married",
    location: "Pune, Maharashtra",
    job: "Customer Support / BPO",
    bio: "I describe myself as someone who's caring, trendy, smart, and more...",
    image: image, // Use the imported image
    // file:<Profilecomponent/>
  },
  {
    name: "Drashana S",
    age: 24,
    height: "5'3\"",
    status: "Never Married",
    location: "Chambhar, Maharashtra",
    job: "Software Developer / Programmer",
    bio: "A little about me, I have completed my B.E and work in IT.",
    image: image1, // Use the imported image
  },
  {
    name: "Priyanka J",
    age: 27,
    height: "5'4\"",
    status: "Never Married",
    location: "Pune, Maharashtra",
    job: "Customer Support / BPO",
    bio: "I describe myself as someone who's caring, trendy, smart, and more...",
    image: image2, // Use the imported image
  },
  {
    name: "Priyanka J",
    age: 27,
    height: "5'4\"",
    status: "Never Married",
    location: "Pune, Maharashtra",
    job: "Customer Support / BPO",
    bio: "I describe myself as someone who's caring, trendy, smart, and more...",
    image: image3, // Use the imported image
  },
  {
    name: "Priyanka J",
    age: 27,
    height: "5'4\"",
    status: "Never Married",
    location: "Pune, Maharashtra",
    job: "Customer Support / BPO",
    bio: "I describe myself as someone who's caring, trendy, smart, and more...",
    image: image4, // Use the imported image
  },
];

const ProfileList = () => {
  return (
   <div className={styles.list}>
    {profiles.map((profiles,index)=>(
      <Link to={`/profile/${index}`}key={index}>
      <ProfileCard profile={profiles}/>
      </Link>
    ))}
   </div>
  );
};

export default ProfileList;
