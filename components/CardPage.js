"use client";
import Link from "next/link";
import { Card, Space, Button, Image } from 'antd';
import KakaoLogin from "@/components/KakaoLogin";
import { useSession, signOut } from "next-auth/react";
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import React, { useState } from "react";
import axios from "axios";
import Test from "./Test";

export default async function Data() {
  const url = 'http://openapi.seoul.go.kr:8088/654571674f6331743338526e4c716b/json/SebcTourStreetKor/1/1000/';
  const response = await axios.get(url);
  let arr = [];
  arr = response.data.SebcTourStreetKor.row;
  return (
      <div>
        <Test arr={arr} />
        {arr.map(x => <CardPage x={x} />)}
      </div>
  )
}

function CardPage({x}) {
  const { Meta } = Card;
  const [like, setLike] = useState(false);

  return (
    <Card
      hoverable
      style={{
        width: 280,
        position: "relative",
        paddingRight: "50px",
        display: "inline-block"
      }}
      cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/inyyfood.appspot.com/o/images%2F1.JPG?alt=media&token=18a632d2-dd20-4144-9f79-4e017eec2db9" />}
    >
       <Button shape="circle" icon={like ? <RiHeart3Fill style={{color:"pink"}} /> : <RiHeart3Line />} 
       style={{
        position: "absolute", 
        top: 10, right: 10, 
        fontSize: "18px"}} 
        onClick={() => setLike(!like) }/>
       <Meta title={x.NAME_KOR} description={"서울시" + " " + x.H_KOR_GU + " " + x.H_KOR_DONG} />
  </Card>

  )
}
