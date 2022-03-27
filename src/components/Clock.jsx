import React, { useState, useEffect } from "react";
import "../assets/Clock.css";
import Card from "../UI/Card";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return <Card className="clock">{date.toLocaleString()}</Card>;
};

export default Clock;
