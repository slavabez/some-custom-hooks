import { useState } from "react";

const useIncrement = (initialValue = 0) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return [value, { increment, decrement }];
};

export default useIncrement;
