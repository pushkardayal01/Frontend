import style from "./Addtask.module.css";
import { CiCirclePlus } from "react-icons/ci";

function Addtask(){
    return(
        <div className={style.box}>
            <div className={style.left}>
                <h2> Oct, 2020</h2>
            </div>
            <div className={style.right}>
                <button>
                    <CiCirclePlus />
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default Addtask;