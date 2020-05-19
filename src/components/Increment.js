import React from "react";
import { useIncrement } from "../hooks";

const Increment = () => {
  const [volume, { increment, decrement, reset }] = useIncrement({
    initialValue: 15,
    maxValue: 20,
    minValue: 0,
  });

  return (
    <div>
      <h3>Volume</h3>
      <button onClick={decrement}>-</button>
      <span>{volume}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Increment;
