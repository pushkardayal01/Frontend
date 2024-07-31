import style from "./Task.module.css";

function Task(){
    return(
        <div className={style.contaier}>
            <div className={style.box}>
                <h2> Tasks</h2>
                <p> All Status</p>
            </div>

            <div className={style.input}>
            <select name="All Tasks" id="task Status">
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
            <option value="Postponed">Postponed</option>
            <option value="Cancelled">Cancelled</option>
            </select>
            </div>
        </div>  
    )


}

export default Task;