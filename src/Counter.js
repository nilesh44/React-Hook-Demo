import React, { useEffect, useState } from "react";
import "./Counter.css";
export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    return () => console.log("unmounting...");
  }, []);

  useEffect(() => {
    console.log("component updated with count " + count);
  }, [count]);

  const handleIncrement = () => {
    setCount((previousCount) => {
      return previousCount + 1;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
