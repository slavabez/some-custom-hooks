import React from "react";
import green from "../green.png";
import { Card } from "../Elements";
import { useHover } from "../hooks";

const Hover = () => {
  const [isHovered, bind] = useHover();
  console.log(isHovered);

  return (
    <div>
      <Card {...bind} style={{ background: isHovered ? "white" : "var(--green)" }}>
        <h3>Some card</h3>
        <img src={green} alt="green" />
      </Card>
    </div>
  );
};

export default Hover;
