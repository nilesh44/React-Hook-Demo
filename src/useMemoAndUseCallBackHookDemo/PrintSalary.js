import React, { memo } from "react";
import { useState, useMemo } from "react";

const PrintSalary = ({ salary }) => {
  console.log("render PrintSalary");
  return (
    <div>
      <h1>PrintSalary</h1>

      <h1>{salary}</h1>
    </div>
  );
};

export default memo(PrintSalary);
