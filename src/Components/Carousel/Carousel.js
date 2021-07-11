import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import "./Carousel.css";

const contents = [
  {
    img: "https://img.jamesedition.com/listing_images/2017/08/21/09/52/06/8821394b-3de7-42d2-8671-7145200d0719/je/2000xxs.jpg",
    description: "Villa in Spain",
  },
  {
    img: "https://www.jamesedition.com/stories/wp-content/uploads/2021/05/Aman-main-950x628.jpeg",
    description: "Sierra Blanca, Marbella, Andalusia, Spain",
  },
  {
    img: "https://img.jamesedition.com/listing_images/2021/05/17/13/52/16/5781f7e0-cafb-4d42-9375-ab80ea31f6e0/je/2000xxs.jpg",
    description: "2020 Lamborghini Urus",
  },
  {
    img: "https://img.jamesedition.com/listing_images/2021/05/14/12/53/52/f0e36796-8f55-4b4e-98ab-14898167617a/je/2000xxs.jpg",
    description:
      "6121 N NAUNI VALLEY Drive, Paradise Valley, Arizona, United States",
  },
  {
    img: "https://img.jamesedition.com/listing_images/2020/12/22/23/14/35/18f8973b-0b71-45df-a133-a5803250b173/je/2000xxs.jpg",
    description: "Apartments In The Federation Tower East In Mibc Moscow City",
  },
  {
    img: "https://img.jamesedition.com/listing_images/2021/04/21/16/49/49/2d307cc5-d4b2-4ae2-ba2d-9af2edcf0406/je/1040x620xc.jpg",
    description: "Worth Avenue Yachts",
  },
];

const Carousel = () => {
  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 1,
  });

  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };

    const interval = setInterval(() => {
      play();
    }, 5000);
  }, []);

  const getWidth = () => window.innerWidth;

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === contents.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (contents.length - 1) * getWidth(),
        activeIndex: contents.length - 1,
      });
    }

    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  const slides = contents.map((content, index) => {
    return (
      <div className="slide" key={index}>
        <img src={content.img} />
        <p>{content.description}</p>
      </div>
    );
  });

  const dots = contents.map((dot, index) => {
    return (
      <div className={`dot ${activeIndex === index ? "dot-active" : ""}`}></div>
    );
  });

  return (
    <div className="slider">
      <div
        className="sliderContent"
        style={{
          transform: `translateX(-${state.translate}px)`,
          transition: `transform ease-in ${state.transition}`,
          width: `${getWidth() * contents.length}px`,
        }}
      >
        {slides}
      </div>
      <div className="buttonsdots">
        <div className="dots">{dots}</div>
        <div
          style={{
            marginTop: "-1rem",
          }}
        >
          <button onClick={prevSlide}>
            <FaAngleLeft />
          </button>
          <button onClick={nextSlide}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
