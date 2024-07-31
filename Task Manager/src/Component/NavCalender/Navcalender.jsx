import style from "./Navcalender.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function Navcalender() {
  return (
    <div className={style.navbar}>
      <div className={style.left}>
      <IoMdArrowBack />
      </div>
      <div className={style.right}>
      <FaSearch />
      </div>

    </div>
  );
}

export default Navcalender;
