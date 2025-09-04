import { useState, useRef, useEffect } from 'react'

const Clock = () => {
  const [now, setNow] = useState(null)
  const [startTime, setStartTime] = useState(null)

  const internalRef = useRef(null);

  const isRunning = internalRef.current !== null;
  console.log('internalRef.current:', internalRef.current)

  useEffect(() => {
    return () => {
      if (internalRef.current !== null) {
        clearInterval(internalRef.current)
      }
    }
  }, [])


  const handleStart = () => {
    if (isRunning) return;
    const t = Date.now();
    setStartTime(t)
    setNow(t);

    clearInterval(internalRef.current);
    internalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10);
  }
  const handleStop = () => {
    if (internalRef.current !== null) {
      clearInterval(internalRef.current)
      internalRef.current = null
    }
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
    <div style={{ display: 'flex', gap: 4 }}>
      <button onClick={handleStart} disabled={isRunning}>Start</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop</button>
      <button onClick={handleReset} >Reset</button>
    </div>
  </div>
}

export default Clock;