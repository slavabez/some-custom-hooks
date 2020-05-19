import React from "react";
import { useMount, useToggle, useUnmount } from "../hooks";

const Mount = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      {isToggled && <Unmount />}
    </div>
  );
};

export const Unmount = () => {
  useMount(() => {
    console.log(`I'm in`);
  });
  useUnmount(() => {
    console.log(`I'm gone`);
  });

  return <div>Unmount me</div>;
};

export default Mount;
