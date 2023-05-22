"use client";
import Link from "next/link";
import { Card, Pagination, Button, Image } from 'antd';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Test from "./Test";
import ImgApi from "./ImgAPI";

export default function Data() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://openapi.seoul.go.kr:8088/654571674f6331743338526e4c716b/json/SebcTourStreetKor/1/1000/';
      const response = await axios.get(url);
      setArr(response.data.SebcTourStreetKor.row);
    };
    fetchData();
  }, []);
  
  const [current, setCurrent] = useState(1);
  const total_card = 8;
  const lastNum = current * total_card;
  const startNum = lastNum - total_card;
  
  let sliceData = arr.slice(startNum, lastNum);

  return (
      <div style={{marginLeft: "25px"}}>
        <Test arr={arr} />
        {sliceData.map(x => <CardPage x={x} />)}
          <Pagination current={current} total={arr.length} defaultPageSize={total_card} showSizeChanger={false} 
          showLessItems={false} simple={true} onChange={(current) =>  setCurrent(current)} />
      </div>
  )
}

function CardPage({x}) {
  const { Meta } = Card;
  const [like, setLike] = useState(false);
  const address = "서울시" + " " + x.H_KOR_GU + " " + x.H_KOR_DONG;
  const [URLaddress, setURLaddress] = useState('https://firebasestorage.googleapis.com/v0/b/inyyfood.appspot.com/o/images%2F1.JPG?alt=media&token=18a632d2-dd20-4144-9f79-4e017eec2db9');

  useEffect(() => {
    const fetchData = async () => {
      setURLaddress(ImgApi(address + " " + x.NAME_KOR));
    };
    fetchData();
  }, []);

  return (
    <Card
      hoverable
      style={{
        width: 280,
        position: "relative",
        marginRight: "50px",
        marginBottom: "50px",
        display: "inline-block"
      }}
      cover={<img alt="example" src={URLaddress} />}
    >
       <Button shape="circle" icon={like ? <RiHeart3Fill style={{color:"pink"}} /> : <RiHeart3Line />} 
       style={{
        position: "absolute", 
        top: 10, right: 10, 
        fontSize: "18px"}} 
        onClick={() => setLike(!like) }/>
       <Meta title={x.NAME_KOR} description={address} />
  </Card>
  )
}
