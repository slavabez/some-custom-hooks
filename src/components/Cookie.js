import React from "react";
import { useCookies } from "../hooks";

const Cookie = () => {
  const [cookie, setCookie] = useCookies({ key: "lol" });

  return (
    <div>
      <p>{cookie}</p>
      <input
        type="text"
        value={cookie || ""}
        onChange={(e) => {
          setCookie(e.target.value);
        }}
      />
    </div>
  );
};

export default Cookie;
