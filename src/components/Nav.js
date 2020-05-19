import React from "react";

const Nav = () => {
  return (
    <nav
      style={{
        background: `var(--black)`,
        color: `white`,
        position: "fixed",
        width: "100vw",
        height: "100vh",
        left: 0,
        right: 0,
      }}
    >
      <h1>Hello</h1>
      <button>Close</button>
    </nav>
  );
};

export default Nav;
