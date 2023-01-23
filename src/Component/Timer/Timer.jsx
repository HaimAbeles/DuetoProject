import { useEffect, useState, useCallback, useRef } from 'react';
import './Timer.css';

const dateToMinSec = (targetDate) => {
  const delta = targetDate - new Date();
  if (delta <= 0) return null;
  const deltaDate = new Date(delta);
  const minutes = `${deltaDate.getMinutes()}`.padStart(2, "0");
  const seconds = `${deltaDate.getSeconds()}`.padStart(2, "0");
  return { minutes, seconds }
}

const DEFAULT_TIMEOUT =  5 * 60 * 1000;

function Timer({ indexTimer }) {

  const loadTimeout = (defaultValue) => {
    const savedDate = new Date(localStorage.getItem(`timeoutTarget${indexTimer}`));
    if (Number.isNaN(+savedDate) || !+savedDate)
      return new Date(defaultValue + +new Date());
    return savedDate;
  };

  const [timeout, setTimeout] = useState(loadTimeout(DEFAULT_TIMEOUT));
  const [{ minutes, seconds }, setData] = useState(dateToMinSec(DEFAULT_TIMEOUT) ?? { minutes: "00", seconds: "00" })
  const intervalRef = useRef(null);

  useEffect(() => {
    updateTimeout(timeout);
  }, [timeout]);

  const updateTimeout = (date) => {
    const dateStr = date.toISOString();
    localStorage.setItem(`timeoutTarget${indexTimer}`, dateStr);
  }

  const onReset = useCallback(() => setTimeout(new Date(DEFAULT_TIMEOUT + +new Date())), [setTimeout]);

  const onFinishedTimeout = () => alert("You missed the last rocket to mars!");

  const handleUpdateData = useCallback(() => {
    const newData = dateToMinSec(timeout);
    if (newData) {
      setData(newData);
      return;
    }

    setData({ minutes: "00", seconds: "00" })
    onFinishedTimeout();
    clearInterval(intervalRef.current);

  }, [timeout]);

  useEffect(() => {
    intervalRef.current = setInterval(handleUpdateData, 100);
    return () => clearInterval(intervalRef.current)
  }, [handleUpdateData]);

  return (
    <div className='timer-container'>
      <div className='title-timer'>Countdown to list off</div>
      <div className='clock-continaer'>
        <span className='clock'>{minutes}</span>
        <span>:</span>
        <span className='clock'>{seconds}</span>
      </div>
      <button className='reset-timer-btn' onClick={onReset}>Reset timer</button>
    </div>
  );
}

export default Timer;
