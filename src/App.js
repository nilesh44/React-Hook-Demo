import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import { Test } from "./Test";
import { Counter } from "./Counter";
import { UseStateObjecAsVeriableDemo } from "./UseStateObjecAsVeriableDemo";
function App() {
  const [counterOn, setCounterOn] = useState(true);
  const [testname, setTestname] = useState("");
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
  const handleUpdateName = (event) => {
    setTestname((name) => {
      return event.target.value;
    });
  };
  return (
    <div className="App">
      {/* <button onClick={handleHideCounter}> hideCounter</button>
      <button onClick={handleShowCounter}> showCounter</button>

      <input
        type="text"
        name="testName"
        id="testName"
        value={testname}
        onChange={handleUpdateName}
      />

      <div>{counterOn && <Counter name={testname} />}</div> */}

      <UseStateObjecAsVeriableDemo />
    </div>
  );
}

export default App;
