import React, { useState } from "react";

export const UseStateSingleVeriableDemo = () => {
  //declearing state for single veriable
  const [count, setCount] = useState(0);

  const IncrementCount = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={IncrementCount}>IncrementCount</button>
    </div>
  );
};
