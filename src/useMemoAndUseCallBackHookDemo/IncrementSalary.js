import React, { memo } from "react";

const IncrementSalary = (props) => {
  console.log("render IncrementSalary");
  return (
    <div>
      <button onClick={props.incrementSalary}>incrementSalary</button>
    </div>
  );
};
export default memo(IncrementSalary);
