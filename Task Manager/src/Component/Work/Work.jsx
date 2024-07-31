import style from "./Work.module.css";
import { RiCheckboxBlankLine } from "react-icons/ri";

function Work(){
    return(
        <div className={style.box}>
            <div className={style.left}>
                <RiCheckboxBlankLine />
            </div>
            <div className={style.right}>
                <h2>Design Changes</h2>
                <p> 2 days ago</p>
            </div>
        </div>
    )
}

export default Work;