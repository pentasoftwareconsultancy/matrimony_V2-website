import React from "react";
import { useParams } from "react-router-dom";
// import blogs from "../blogmaindata/Blogmaindata";
// import blog from "../blogdata/Blogdata"
// import blogs from "../blogdata/Blogdata";
import blogs from "../blogdata/Blogdata";
import styles from "./Blogmaincard.module.css";

const Blogmaincard = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id, 10));

  // if (!blog) {
  //   return <p>Blog post not found!</p>;
  // }

  return (
    <div className={styles.cards}>
       <img src={blog.image} alt={blog.title} className={styles.img} />
    <div className={styles.main}>
    <div className={styles.container}>
      <h1 className={styles.header}>{blog.title}</h1>
      <h1 className={styles.description}>{blog.description}</h1>
      <p className={styles.author}>By: {blog.author}</p>
      <img src={blog.image} alt={blog.title} className={styles.image} />
      <div className={styles.content}>
        <p>{blog.content}</p>
      </div>
    </div>
    <div className={styles.containermain}>
      <div className={styles.blog}>LATEST BLOGS</div>
      <div className={styles.text}>{blog.text}</div>
      <hr/>
      <div className={styles.text}>{blog.blogtext}</div>
<button className={styles.button}>Read All Blogs</button>
    </div>
    </div>
    </div>
  );
};

export default Blogmaincard;
