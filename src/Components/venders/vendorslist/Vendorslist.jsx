import Vendorcard from "../vendorscard/Vendorcard";
import styles from "./vendorslist.module.css";

const VendorList = ({ vendors }) => {
  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {vendors.map((vendor) => (
          <Vendorcard key={vendor._id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
};

export default VendorList;
