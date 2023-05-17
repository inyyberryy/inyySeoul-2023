"use client";
import { useRef } from 'react';
import { Carousel, Image, Icon, Button } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

const AutoplayImg = () => {
  const contentStyle = {
    height: '260px',
    color: 'black',
    lineHeight: '260px',
    textAlign: 'center',
  };

  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const previous = () => {
    carouselRef.current.prev();
  };

  const carouselProps = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div style={{position: "relative"}}>
      <Carousel autoplay ref={carouselRef} {...carouselProps} >
      <div>
        <h3 style={contentStyle}><Image src="3.jpeg" style={{width: "100%", height: "100%"}} fluid /></h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
      <div>
        <h3 style={contentStyle}>5</h3>
      </div>
    </Carousel>
    <LeftCircleOutlined onClick={previous} style={{position: "absolute", top:130, left:20, fontSize:30}} />
    <RightCircleOutlined onClick={next} style={{position: "absolute", top:130, right:20, fontSize:30}} />
    </div>
  );
}

export default AutoplayImg;