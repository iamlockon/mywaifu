import React from "react";
import "../../loader.styles.css";
import loadingGif from "../../assets/site_icon.png";
const Loader = () => {
  return (
    <div className="text-loader font-monoton flex flex-col gap-1 items-center">
      <span>
        <img
          width={100}
          src={loadingGif}
          alt="loading..."
          className="opacity-[0.25] rotate"
        />
      </span>
      <div className="text-container my-10">
        <span className="letter">M</span>
        <span className="letter">A</span>
        <span className="letter">E</span>
        <span className="letter">'</span>
        <span className="letter">S</span>
        <span className="letter"> </span>
        <span className="letter">C</span>
        <span className="letter">R</span>
        <span className="letter">O</span>
        <span className="letter">C</span>
        <span className="letter">H</span>
        <span className="letter">E</span>
        <span className="letter">T</span>
        <span className="letter"> </span>
        <span className="letter">D</span>
        <span className="letter">I</span>
        <span className="letter">A</span>
        <span className="letter">R</span>
        <span className="letter">Y</span>
      </div>
    </div>
  );
};

export default Loader;
