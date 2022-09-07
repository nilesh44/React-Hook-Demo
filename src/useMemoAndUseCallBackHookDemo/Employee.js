import React, { useCallback, useMemo, useState } from "react";
import IncrementAge from "./IncrementAge";
import IncrementSalary from "./IncrementSalary";
import PrintAge from "./PrintAge";
import PrintSalary from "./PrintSalary";
export const Employee = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(1000);

  //useCallback returns a memoized function
  //   /These hooks will give you back a cached version unless one of their dependencies (e.g. state or props) changes.
  //   useCallback follows the concept of Memoization (caching)
  //   it will execute first time and store value for next time it will return same value if it's dependency state and prop is not updated
  // it only execute this function when the value of dependency state and prop change.
  // this will imporve the performance of the application
  // due to this react will avoide unnecessary rendering and unnecessary execution of function.
  const incrementAge = useCallback(() => {
    setAge((previousAge) => {
      return previousAge + 1;
    });
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary((previousSalary) => {
      return previousSalary + 1000;
    });
  }, [salary]);

  return (
    <div>
      <h1>Employee component</h1>

      <IncrementSalary incrementSalary={incrementSalary} />
      <PrintSalary salary={salary} />
      {/* IncrementAge will rerender only when value of age is updated because
       we have added useCallback to IncrementAge 
      if we will not use callback then IncrementAge component will render 
      on each and every rendering of employ component*/}
      <IncrementAge incrementAge={incrementAge} />
      <PrintAge age={age} />
    </div>
  );
};
