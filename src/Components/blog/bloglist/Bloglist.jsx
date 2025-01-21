import React, { useState } from "react";
import Blogcard from "../blogcard/Blogcard";
import styles from "./Bloglist.module.css";
import blogs from "../blogdata/Blogdata";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Bloglist = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6; // Number of cards per page
  const totalPages = Math.ceil(blogs.length / cardsPerPage);

  // Get the blogs for the current page
  const startIndex = (currentPage - 1) * cardsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + cardsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blogGrid}>
        {currentBlogs.map((blog) => (
          <Blogcard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            author={blog.author}
            content={blog.content}
            image={blog.image}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          <FaArrowLeft /> Prev
        </button>
        <span className={styles.pageInfo}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Bloglist;
