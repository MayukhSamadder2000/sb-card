import React from "react";
import "./title.scss";

type TitleProps = {
  color?: "white" | "black";
  text?: string;
};
export const Title = ({ color = "white", text = "Title" }: TitleProps) => {
  return <div className={`title ${color}`}>{text}</div>;
};
