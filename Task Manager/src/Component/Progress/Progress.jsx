
import style from "./Progress.module.css";
import { VscChecklist } from "react-icons/vsc";

function Progress(){
    return(
        <div className={style.progress}>
           <div className={style.title}>
            <h2>Progress</h2>
           </div>
           <div className={style.box}>
                <div className={style.left}>
                <VscChecklist />
                </div>
                <div className={style.right}>
                <div className={style.title}>
                    <h2>Design Change</h2>
                    <p>2 days ago</p>
                </div>
            </div>
           </div>

        </div>
    )
}

export default Progress;