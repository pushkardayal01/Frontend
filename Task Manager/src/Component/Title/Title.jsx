import style from "./Title.module.css";

function Title(){
    return (
        <div className={style.title}>
            <h2>
                Hello user!
            </h2>
            <p>Have a nice day</p>
        </div>
    )
}

export default Title;