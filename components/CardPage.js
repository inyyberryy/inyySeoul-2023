"use client";
import Link from "next/link";
import { Card, Space, Button, Image } from 'antd';
import KakaoLogin from "@/components/KakaoLogin";
import { useSession, signOut } from "next-auth/react";
import { RiHeart3Line } from 'react-icons/ri';

export default function CardPage() {
  const { Meta } = Card;

  return (
    <Card
      hoverable
      style={{
        width: 240,
        position: "relative",
      }}
      cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/inyyfood.appspot.com/o/images%2F1.JPG?alt=media&token=18a632d2-dd20-4144-9f79-4e017eec2db9" />}
    >
       <Button shape="circle" icon={<RiHeart3Line />} style={{position: "absolute", top: 10, right: 10, fontSize: "18px"}} />
       <Meta title="Restaurant" description="www.inyyberryy.com" />
  </Card>

  )
}
