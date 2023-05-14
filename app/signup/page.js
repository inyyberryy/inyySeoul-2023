"use client";
import { Card, Button } from 'antd';
import Image from 'next/image'; 
import { TbMessageCircle2Filled } from "react-icons/tb"; 
import { HiOutlineMail } from "react-icons/hi";
import KakaoLogin from '@/components/KakaoLogin';

export default function SignUp() {
  return (
    <div>
      <Card
        title=""
        bordered={false}
        style={{
          width: 300,
        }}
      >
      <Image 
        src="/logo_text.png"
        alt="inyySeoul"
        width={210} height={60} 
      />
    <p>I • SEOUL • YOU</p>
    <Button style={{fontSize:"16px", background: "#69b1ff", height: "40px", width: "300px"}}> <HiOutlineMail />이메일 회원가입</Button>
    <KakaoLogin />
  </Card>
      Sign Up
    </div>
  )
}
