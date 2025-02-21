import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogMainCard.module.css";

const BlogMainCard = () => {
  const { id } = useParams(); // Fetch the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setError(null); // Reset error state
        const response = await fetch(`http://localhost:8000/api/v1/blogs/${id}`); // API endpoint for single blog
        if (!response.ok) throw new Error("Failed to fetch blog details");

        const result = await response.json();

        // Ensure the response structure is valid
        if (result.success && result.data) {
          setBlog(result.data); // Use the `data` key from the response
        } else {
          throw new Error("Unexpected response format from backend");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err.message); // Set error message
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchBlog();
  }, [id]);

  // Handle loading and error states
  if (loading) return <p>Loading blog...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.card}>
      <img src={blog.blogimageUrl || "https://via.placeholder.com/300"} alt={blog.title} className={styles.img} />
      <div className={styles.container}>
        <h1 className={styles.header}>{blog.title}</h1>
        <p className={styles.author}>
          <strong>Author:</strong> {blog.createdBy?.name || blog.author || "Unknown Author"}
        </p>
        <p className={styles.category}>
          <strong>Category:</strong> {blog.category || "Uncategorized"}
        </p>
        <p className={styles.published}>
          <strong>Published:</strong> {blog.isPublished ? "Yes" : "No"}
        </p>
        <div className={styles.content}>
          <p>{blog.content}</p>
        </div>
        <p className={styles.timestamp}>
          <strong>Created At:</strong> {new Date(blog.createdAt).toLocaleDateString()}
        </p>
        <p className={styles.timestamp}>
          <strong>Updated At:</strong> {new Date(blog.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default BlogMainCard;
