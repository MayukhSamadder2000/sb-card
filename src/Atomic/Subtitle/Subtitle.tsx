import React from "react";
import "./subtitle.scss";

type SubProps = {
  color?: "white" | "black";
  text?: string;
};

export const Subtitle = ({ color, text = "Title" }: SubProps) => {
  return <div className={`subtitle ${color}`}>{text}</div>;
};
