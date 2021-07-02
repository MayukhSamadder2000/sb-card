import React from "react";
import { Subtitle } from "../../Atomic/Subtitle/Subtitle";
import { Title } from "../../Atomic/Title/Title";
import { Image } from "../../Atomic/Image/Image";
import "./id.scss";

type IdProps = {
  wdt: number;
  bg: "dark" | "light";
};

export const ID = ({ wdt, bg }: IdProps) => {
  return (
    <>
      {bg === "dark" ? (
        <div className='width' style={{ width: `${wdt}px` }}>
          <div className='imgContent'>
            <Image bgColor='dark' />
          </div>
          <div className='textContent'>
            <Title color='white' />
            <Subtitle color='white' />
          </div>
        </div>
      ) : (
        <div className='width' style={{ width: `${wdt}px` }}>
          <div className='imgContent'>
            <Image bgColor='light' />
          </div>
          <div className='textContent'>
            <Title color='black' />
            <Subtitle color='black' />
          </div>
        </div>
      )}
    </>
  );
};
