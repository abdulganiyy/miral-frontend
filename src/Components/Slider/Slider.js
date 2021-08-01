import React from "react";
import "./Slider.css";
import Button from "./Button";

const Slider = ({ contents }) => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const prev = () => {
    if (activeSlide === 0) {
      setActiveSlide(contents.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const next = () => {
    if (activeSlide === contents.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const moveDot = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className={"Slider"}>
      {contents.map((content, index) => {
        return (
          <div
            key={index}
            className={index === activeSlide ? "Slide SlideActive" : "Slide"}
          >
            <img alt="cat" src={content.img} />
          </div>
        );
      })}
      <Button direction="left" moveSlide={prev} />
      <Button direction="right" moveSlide={next} />
      <div className="dots">
        {Array.from({ length: contents.length }).map((item, index) => (
          <div
            onClick={() => moveDot(index)}
            className={activeSlide === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
