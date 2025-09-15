import React, { useEffect, useState } from "react";
import style from './DigitalClock.module.css';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  function formatTime() {
    let hours   = String(time.getHours()).padStart(2, '0');
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className={style.clockContainer}>
      <div className={style.clock}>
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
