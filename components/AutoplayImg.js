"use client";
import { Carousel, Image } from 'antd';

const AutoplayImg = () => {
  const contentStyle = {
    height: '260px',
    color: '#fff',
    lineHeight: '260px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src="2.jpeg" style={{width: "100%", height: "100%"}} /></h3> 
    </div>
    <div>
      <h3 style={contentStyle}><img src="3.jpeg" style={{width: "100%", height: "100%"}} /></h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
  );
}

export default AutoplayImg;
