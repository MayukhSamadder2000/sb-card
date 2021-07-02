import React from "react";
import "./card.scss";
import { BigImage } from "../../Atomic/BigImage/BigImage";
import { Bottom } from "../Bottom/Bottom";

type CardProps = {
  bgColor: "light" | "dark";
};

export const Card = ({ bgColor }: CardProps) => {
  return (
    <>
      <div className={`card ${bgColor}`}>
        <div className='cardTop'>
          <BigImage borRad={20} />
        </div>
        {bgColor == "light" ? (
          <div className='cardBtm'>
            <Bottom bgColor='light' />
          </div>
        ) : (
          <div className='cardBtm'>
            <Bottom bgColor='dark' />
          </div>
        )}
      </div>
    </>
  );
};
