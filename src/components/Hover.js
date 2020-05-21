import React from "react";
import green from "../green.png";
import { Card } from "../Elements";

const Hover = () => {
  return (
    <div>
      <Card style={{ background: "var(--green)" }}>
        <h3>Some card</h3>
        <img src={green} alt="green" />
      </Card>
    </div>
  );
};

export default Hover;
