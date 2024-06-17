import styles from "../styles/NavBar.module.css";
import { IoMenuOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.box1}>
        <span>Stock Tracker</span>
      </div>

      {/* <ul className={styles.ul}>
        <li className="li">Home</li>
        <li className="li">Products</li>
        <li className="li">Sales and Report</li>
        <li className="li">Categories</li>
        <li className="li">Help</li>
      </ul> */}

      <div className={styles.menuBox}>
        <IoMenuOutline color="white" className={styles.menu} size="25" />
      </div>
    </nav>
  );
};

export default NavBar;
