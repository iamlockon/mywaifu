import React from "react";
import {
  AiOutlineInstagram
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="py-5 mt-3  bg-amber-50 flex flex-wrap justify-center items-center gap-2 md:gap-10  absolute right-0 left-0 ">
      <p className="flex gap-3">
        <a href="https://www.instagram.com/mae_crochetdiary">
          <AiOutlineInstagram className="text-6xl text-gray-800" />
        </a>
      </p>
    </div>
  );
};

export default Footer;
