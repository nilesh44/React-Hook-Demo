import React, { useReducer } from "react";
import "./CounterWithUseReducer.css";
import { counterReducer, initialState } from "./CounterReducer";
export const CounterWithUseReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch("increment");
        }}
      >
        increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch("decrement");
        }}
      >
        decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch("reset");
        }}
      >
        reset
      </button>
    </div>
  );
};
