import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
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
