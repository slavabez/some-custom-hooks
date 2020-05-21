import React from "react";
import { useLocalStorage } from "../hooks";

const Cookie = () => {
  const [value, setValue] = useLocalStorage("lol", "Ouch!");

  return (
    <div>
      <p>{value}</p>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Cookie;
