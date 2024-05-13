import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  console.log(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);
    
    /* Stops clock from running if it's ever unmounted */
    return () => {
      clearInterval(intervalId)
    }
  }, []);

  const padZero = number => {
    return (number < 10 ? '0' : '') + number ;
  }

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    /* if hours % 12 is zero, it's falsy */
    hours = hours % 12 || 12;
    
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  )
}

export default DigitalClock;