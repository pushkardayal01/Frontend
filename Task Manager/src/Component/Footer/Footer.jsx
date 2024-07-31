import style from "./Footer.module.css";
import { IoMdHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.box}>
        <button className={style.btn}><IoMdHome /></button>
        <button className={style.btn}><SlCalender /></button>
        <button className={style.btn}><IoIosNotifications /></button>
        <button className={style.btn}><FaSearch /></button>
      </div>
    </footer>
  );
}

export default Footer;
