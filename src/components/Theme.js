import React from "react";
import { useTheme } from "../hooks";

const Theme = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div>
      <select
        onChange={(e) => {
          setTheme(e.target.value);
        }}
        value={theme}
        name="theme_select"
        id="ts"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default Theme;
