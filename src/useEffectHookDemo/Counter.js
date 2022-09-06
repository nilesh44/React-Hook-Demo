import React, { useEffect, useState } from "react";
import "./Counter.css";
export const Counter = (props) => {
  const [count, setCount] = useState(0);
  //syntex of useEffect
  //useEffect(callbackFunction(),[props,states])

  //this will execute after every rendering
  useEffect(() => {
    console.log("execute after every count");
  });
  //run only onec after rendering or when component first added into dom
  useEffect(() => {
    console.log("component did mount");
  }, []);

  //run only onec component removed from dom
  //this is use for clenup
  useEffect(() => {
    return () => console.log("unmounting...");
  }, []);

  //this execute after every update in state 'count' value
  useEffect(() => {
    console.log("component updated with count " + count);
  }, [count]);

  //this execute after every update in prope 'name' value
  useEffect(() => {
    console.log("props " + props.name);
  }, [props.name]);

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
