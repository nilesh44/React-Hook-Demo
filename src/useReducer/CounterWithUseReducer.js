import React, { useReducer } from "react";
import "./CounterWithUseReducer.css";
import { counterReducer, initialState } from "./CounterReducer";
import {
  actionIncrement,
  actionDecrement,
  actionReset,
} from "./CounterReducerAction";
export const CounterWithUseReducer = () => {
  //creating reducer instance by passing reducer and initial state to useReducer
  //it return dispach and return value what we expect to get return
  const [count, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button
        //dispatching event and passing action as an argument
        onClick={() => {
          dispatch(actionIncrement);
        }}
      >
        increment
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(actionDecrement);
        }}
      >
        decrement
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(actionReset);
        }}
      >
        reset
      </button>
    </div>
  );
};
