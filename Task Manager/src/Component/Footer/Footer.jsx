import style from "./Footer.module.css";
import { IoMdHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.box}>
        <Link to="/" className={style.btn}>
          <IoMdHome />
        </Link>
        <Link to="/calpage" className={style.btn}>
          <SlCalender />
        </Link>
        <Link to="/" className={style.btn}>
          <IoIosNotifications />
        </Link>
        <Link to="/" className={style.btn}>
          <FaSearch />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
