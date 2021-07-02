import React from "react";
import "./dots.scss";

type DotProps = {
  color: "dark" | "light";
};

export const Dots = ({ color }: DotProps) => {
  return (
    <div className='dotContainer'>
      <div className={`dot ${color}`}></div>
      <div className={`dot ${color}`}></div>
      <div className={`dot ${color}`}></div>
    </div>
  );
};
