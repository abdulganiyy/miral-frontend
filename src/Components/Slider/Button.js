import React from "react";
import "./Slider.css";

const Button = ({ direction, moveSlide }) => {
  return (
    <button
      className={direction === "left" ? "Button prev" : "Button next"}
      onClick={moveSlide}
    >
      <img
        alt="icon"
        src={
          direction === "left"
            ? "https://raw.githubusercontent.com/Ziratsu/Slider-React/8d20927f5b19d9261b49ae717fc7957e5d66080f/src/Components/Slider/icons/left-arrow.svg"
            : "https://raw.githubusercontent.com/Ziratsu/Slider-React/8d20927f5b19d9261b49ae717fc7957e5d66080f/src/Components/Slider/icons/right-arrow.svg"
        }
      />
    </button>
  );
};

export default Button;
