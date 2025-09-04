import { useState, useRef } from 'react'

const Clock = () => {
  const [now, setNow] = useState(null)
  const [startTime, setStartTime] = useState(null)
  const internalRef = useRef();



  const handleStart = () => {
    setStartTime(Date.now())
    setNow(Date.now());

    clearInterval(internalRef.current);
    internalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10);
  }
  const handleStop = () => {
    clearInterval(internalRef.current)
  }

  const handleReset = () => {
    handleStop();
    setNow(null);
    setStartTime(null);
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000
  }


  return <div>
    <h2>Clock</h2>
    <h3>Time Passed: {secondsPassed.toFixed(2)}</h3>
    <div style={{ display: 'flex' }}>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  </div>
}

export default Clock;