import React from "react";
import { Dots } from "../../Atomic/Dots/Dots";
import { ID } from "../Id/Id";
import "./bottom.scss";

type BottomProps = {
  bgColor: "dark" | "light";
};

export const Bottom = ({ bgColor }: BottomProps) => {
  return (
    <>
      {bgColor == "dark" ? (
        <div className='bottomContainer'>
          <ID bg='dark' wdt={90} />
          <Dots color='light' />
        </div>
      ) : (
        <div className='bottomContainer'>
          <ID bg='light' wdt={90} />
          <Dots color='dark' />
        </div>
      )}
    </>
  );
};
