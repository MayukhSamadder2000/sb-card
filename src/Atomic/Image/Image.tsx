import React from "react";
import "./image.scss";

type ImageProps = {
  bgColor: "dark" | "light";
};

export const Image = ({ bgColor }: ImageProps) => {
  return (
    <div className={`image ${bgColor}`}>
      <img className='img' src='https://picsum.photos/200/200' alt='No image' />
    </div>
  );
};
