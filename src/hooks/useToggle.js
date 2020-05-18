import { useState } from "react";

export const useToggle = (initialValue) => {
  const [isToggled, setIsToggled] = useState(initialValue);
  const toggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return {
    isToggled,
    toggle
  };
};
