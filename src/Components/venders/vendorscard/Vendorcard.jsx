import { Link } from "react-router-dom";
import styles from "./VendorCard.module.css";

const VendorCard = ({ vendor }) => {
  const { _id, name, title, description, profilePicUrl, address, phone } = vendor;

  const fallbackImage = "/images/placeholder.png"; // Replace with a local placeholder image

  return (
    <div className={styles.card}>
      <img
        src={profilePicUrl || fallbackImage}
        alt={title}
        className={styles.image}
       
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>Name: {name}</p>
        <p className={styles.time}>Phone: {phone}</p>
        <p className={styles.time}>Address: {address}</p>
        <p className={styles.description}>{description}</p>
        <Link to={`/vendor-detail/${_id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default VendorCard;
