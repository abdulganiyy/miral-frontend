import React from "react";
import "./Slider.css";
import Button from "./Button";

const categories = [
  {
    name: "OIL AND GAS",
    img: "https://img.jamesedition.com/listing_images/2018/04/04/05/32/53/fdfd2894-c789-40d2-a258-280fe950aa2a/je/2000xxs.jpg",
  },
  {
    name: "AGRICULTURE",
    img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "AUTOMOTIVE",
    img: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "REAL ESTATE",
    img: "https://images.unsplash.com/photo-1610998342124-c4fcba4cf4bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  },
  {
    name: "SOLAR ENERGY",
    img: "https://images.unsplash.com/photo-1584276433295-4b49a252e5ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=742&q=80",
  },
  {
    name: "INFORMATION TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1615820346289-9581ad2a8bf7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
  },
];

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
        {Array.from({ length: 6 }).map((item, index) => (
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
