import React from "react";
import green from "../green.png";
import { Card } from "../Elements";
import { useMeasure, useWindowWidth } from "../hooks";

const Hover = () => {
  const width = useWindowWidth();
  const [{ ref }, bounds] = useMeasure();
  console.log(bounds);

  return (
    <div>
      <Card ref={ref} style={{ background: "var(--green)" }}>
        <h3>Some card</h3>
        <img src={green} alt="green" />
      </Card>
    </div>
  );
};

export default Hover;
