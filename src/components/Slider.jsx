import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { useState } from "react";
import { sliderItems } from "../data";
import { mobile } from "../responsive";
import pant from "../assets/pant.png";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
  padding: 20px;

  ${mobile({
    flexDirection: "column",
  })};
`;

const Image = styled.img`
  height: 80%;
  padding: 50px;

  ${mobile({
    padding: 0,
  })}
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Desc = styled.p`
  margin: 50px 50px 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  ${mobile({
    margin: 0,
  })}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="relative h-[80vh] md:h-[calc(100%-90px)] w-screen flex overflow-hidden">
      <div className="slider-arrow-left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <div className="flex items-center justify-center flex-1 h-1/3 md:block">
              <Image src={pant} alt="123" />
            </div>

            <div className="flex flex-col flex-1 text-center md:text-left">
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <div className="slider-arrow-right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
