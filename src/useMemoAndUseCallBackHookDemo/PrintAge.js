import React, { memo } from "react";

const PrintAge = (props) => {
  console.log("render Print Age");
  return (
    <div>
      <h1>Print Age</h1>

      <h1>{props.age}</h1>
    </div>
  );
};
export default memo(PrintAge);
