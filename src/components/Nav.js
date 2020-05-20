import React from "react";
import { useAppContext } from "../state";
import { useScrollFreeze } from "../hooks";

const NavWrapper = () => {
  const { isMenuOpen } = useAppContext();
  if (!isMenuOpen) return null;
  return <Nav />;
};

const Nav = () => {
  const { isMenuOpen, toggleMenu } = useAppContext();
  useScrollFreeze();

  if (!isMenuOpen) return null;
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
      <button onClick={toggleMenu}>Close</button>
    </nav>
  );
};

export default NavWrapper;
