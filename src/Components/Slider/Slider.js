import React from "react";
import "./Slider.css";

const Slider = () => {
  const slides = [
    {
      src: "https://img.jamesedition.com/listing_images/2021/03/12/12/10/04/1e8815f4-8b57-44d3-9d73-16f74b6fe49d/je/1100xxsxm.jpg",
      text: "house in Saint-Tropez, Provence-Alpes-Côte dAzur, France",
    },
    {
      src: "https://img.jamesedition.com/listing_images/2021/08/14/18/59/09/ddff56ff-f9e1-43b4-985d-2b1d8b5d7e33/je/2000xxs.jpg",
      text: "house in Mykonos, 84600, Mykonos, Decentralized Administration of the Aegean, Greece",
    },
    {
      src: "https://img.jamesedition.com/listing_images/2021/06/01/14/37/28/43ba2728-246f-4779-8a2c-aaf934cc1289/je/1040x620xc.jpg",
      text: "2021 ASTON MARTIN VALKYRIE • $325,566",
    },
    {
      src: "https://img.jamesedition.com/listing_images/2021/06/13/08/06/20/c77dd89e-39bf-4c5a-9d58-e2cbc56030fe/je/2000xxs.jpg",
      text: "apartment in Dubai, Dubai, Dubai, United Arab Emirates",
    },
    {
      src: "https://img.jamesedition.com/listing_images/2021/06/15/15/26/45/39529f49-d5dc-41e3-aba9-c9c8b1dfd6cd/je/1040x620xc.jpg",
      text: "2022 Ferrari SF90 Spider • €990.000",
    },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex, slides.length]);

  return (
    <div>
      <div className="wrapper">
        <div className="slideshow-container">
          {slides.map((slide, index) => {
            return (
              <div
                className={index === activeIndex ? "myslide active" : "myslide"}
              >
                <img src={slide.src} alt="myslide" />
              </div>
            );
          })}
        </div>

        <div className="hero">
          <span className="btn prev">&#10094;</span>
          <span className="btn next">&#10095;</span>
          <div className="slideshow-squares">
            {slides.map((slide, index) => {
              return (
                <div
                  className={index === activeIndex ? "square active" : "square"}
                ></div>
              );
            })}
          </div>
          {slides.map((slide, index) => {
            return (
              <div
                className={index === activeIndex ? "text activetext" : "text"}
              >
                {slide.text}
              </div>
            );
          })}
          <h1 className="hero-heading">
            <span className="hero-heading-main">The World's</span>{" "}
            <span className="hero-heading-sub">Luxury Marketplace</span>
          </h1>
          <div className="hero-short-info">
            ONE SEARCH • 200,000+ LISTINGS • 7,000+ TRUSTED SELLERS • 120
            COUNTRIES
          </div>
        </div>
      </div>
    </div>
  );
};

// import Button from "./Button";

// const Slider = ({ contents }) => {
//   const [activeSlide, setActiveSlide] = React.useState(0);

//   const prev = () => {
//     if (activeSlide === 0) {
//       setActiveSlide(contents.length - 1);
//     } else {
//       setActiveSlide(activeSlide - 1);
//     }
//   };

//   const next = () => {
//     if (activeSlide === contents.length - 1) {
//       setActiveSlide(0);
//     } else {
//       setActiveSlide(activeSlide + 1);
//     }
//   };

//   const moveDot = (index) => {
//     setActiveSlide(index);
//   };

//   return (
//     <div className={"Slider"}>
//       {contents.map((content, index) => {
//         return (
//           <div
//             key={index}
//             className={index === activeSlide ? "Slide SlideActive" : "Slide"}
//           >
//             <img alt="cat" src={content.img} />
//           </div>
//         );
//       })}
//       <Button direction="left" moveSlide={prev} />
//       <Button direction="right" moveSlide={next} />
//       <div className="dots">
//         {Array.from({ length: contents.length }).map((item, index) => (
//           <div
//             onClick={() => moveDot(index)}
//             className={activeSlide === index + 1 ? "dot active" : "dot"}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Slider;
