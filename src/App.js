import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import { Test } from "./Test";
import { Counter } from "./Counter";
function App() {
  const [counterOn, setCounterOn] = useState(true);

  function DisplayCounter() {
    if (counterOn) {
      return <Counter />;
    }
    return;
  }

  const handleHideCounter = () => {
    setCounterOn((counterOn) => false);
  };
  const handleShowCounter = () => {
    setCounterOn((counterOn) => true);
  };
  return (
    <div className="App">
      <button onClick={handleHideCounter}> hideCounter</button>
      <button onClick={handleShowCounter}> showCounter</button>
      <div>{counterOn && <Counter />}</div>
    </div>
  );
}

export default App;
