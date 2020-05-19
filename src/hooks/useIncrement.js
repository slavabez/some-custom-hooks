import { useState } from "react";

export const useIncrement = ({
  initialValue = 0,
  minValue = -10000,
  maxValue = 10000,
}) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue((prevState) => (prevState >= maxValue ? maxValue : prevState + 1));
  };
  const decrement = () => {
    setValue((prevState) => (prevState <= minValue ? minValue : prevState - 1));
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, { increment, decrement, reset }];
};

