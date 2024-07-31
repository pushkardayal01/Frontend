import style from './Status.module.css';

function Status() {
  return (
    <div className={style.box}>
      <button className={style.btn}>Tasks</button>
      <button className={style.btn}>In-process</button>
      <button className={style.btn}>Completed</button>
    </div>
  );
}

export default Status;
