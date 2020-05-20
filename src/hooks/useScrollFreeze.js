import { useLayoutEffect } from "react";

/**
 * Freeze body scroll, unfreeze after
 */
export const useScrollFreeze = () => {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = `hidden`;

    return () => {
      document.body.style.overflow = original;
    };
  }, []);
};
