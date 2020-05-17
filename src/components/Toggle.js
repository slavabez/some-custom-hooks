import React, { useState } from "react";
import useToggle from "../hooks/useToggle";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const toggle = useToggle();
  return (
    <div>
      <button
        onClick={() => {
          setIsToggled((prevState) => !prevState);
        }}
      >
        Button
      </button>
      {isToggled && <p>Toggled</p>}
    </div>
  );
};

export default Toggle;
