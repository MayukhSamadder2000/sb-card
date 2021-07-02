import React from "react";
import "./bigimage.scss";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/all";

type BigProps = {
  borRad: number;
};

export const BigImage = ({ borRad }: BigProps) => {
  return (
    <div className='bigImageContainer' style={{ borderRadius: `${borRad}px` }}>
      <div className='icons'>
        <FaFacebookF className='icon' />
        <FaTwitter className='icon' />
        <FaInstagramSquare className='icon' />
      </div>
    </div>
  );
};
