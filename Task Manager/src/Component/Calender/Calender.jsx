import style from './Calender.module.css';

function Calender() {
  return (
    <div className={style.calender}> {/* Ensure this matches the CSS class */}
      <div className={style.date}>
        <div className={style.day}>
          <p>Mo</p>
          <p>3</p>
        </div>
      </div>
      <div className={style.date}>
        <div className={style.day}>
          <p>Tu</p>
          <p>4</p>
        </div>
      </div>
      <div className={style.date}>
        <div className={style.day}>
          <p>We</p>
          <p>5</p>
        </div>
      </div>
      <div className={style.date}>
        <div className={style.day}>
          <p>Th</p>
          <p>6</p>
        </div>
      </div>
      <div className={style.date}>
        <div className={style.day}>
          <p>Fr</p>
          <p>7</p>
        </div>
      </div>
      <div className={style.date}>
        <div className={style.day}>
          <p>Sa</p>
          <p>8</p>
        </div>
      </div>
      <div className={style.date}>
        <div className={style.day}>
          <p>Su</p>
          <p>9</p>
        </div>
      </div>
      <div className={style.date}></div>
    </div>
  );
}

export default Calender;
