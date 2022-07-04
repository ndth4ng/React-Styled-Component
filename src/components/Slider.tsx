import { useState } from "react";
import { sliderItems } from "../data";
import { ArrowLeftIcon, ArrowRightIcon, images } from "../constants";

type Direction = "left" | "right";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction: Direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="relative h-[80vh] md:h-[calc(100%-90px)] flex overflow-hidden">
      <div className="slider-arrow-left" onClick={() => handleClick("left")}>
        <ArrowLeftIcon />
      </div>
      <div
        className={`h-full flex transition-all duration-1000 ease-in-out translate-x-[${
          slideIndex * -100
        }vw]`}
      >
        {sliderItems.map((item) => (
          <div
            style={{ backgroundColor: item.bg }}
            className="w-[100vw] flex-col md:flex-row h-full flex px-5 items-center"
            key={item.id}
          >
            <div className="flex items-center justify-center flex-1 h-1/3 md:block">
              <img className="h-[80%] md:p-10" src={images.momo} alt="123" />
            </div>

            <div className="flex flex-col flex-1 w-full text-center md:text-left md:px-10">
              <h1 className="text-5xl md:text-6xl">{item.title}</h1>
              <p className="tracking-wider">{item.desc}</p>
              <button className="w-1/2 p-3 mx-auto mt-5 text-white bg-teal-700 md:w-1/4 md:ml-0">
                SHOW NOW
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="slider-arrow-right" onClick={() => handleClick("right")}>
        <ArrowRightIcon />
      </div>
    </div>
  );
};

export default Slider;
