import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [second, setSecond] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSecond(0);
    setIsActive(false);
  };

  const handleStop = () => {
    clearTimeout(second);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000);
    } else if (!isActive && second !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, second]);

  return (
    <div className="App">
      <h1>{second}</h1>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
