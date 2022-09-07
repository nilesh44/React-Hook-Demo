import React, { memo } from "react";

const IncrementAge = (props) => {
  {
    console.log("render Increment Age");
  }
  return (
    <div>
      <button onClick={props.incrementAge}>incrementAge</button>
    </div>
  );
};

export default memo(IncrementAge);
