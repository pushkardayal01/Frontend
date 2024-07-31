import style from "./Navbar.module.css";
import { IoPerson } from "react-icons/io5";
import { BsList } from "react-icons/bs";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
      <BsList />
      </div>
      <div className={style.right}>
      <IoPerson />
      </div>

    </div>
  );
}

export default Navbar;
