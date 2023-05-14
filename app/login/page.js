"use client";
import { Card, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Image from 'next/image'; 
import { TbMessageCircle2Filled } from "react-icons/tb"; 
import Kakao from 'next-auth/providers/kakao';
import KakaoLogin from '@/components/KakaoLogin';

export default function Login() {
  return (
    <div>
      <Card
        title=""
        bordered={false}
        style={{
          width: 500,
        }}
      >
      <Image 
        src="/logo_text.png"
        alt="inyySeoul"
        width={210} height={60} 
      />
    <p>I • SEOUL • YOU</p>
    <Input size="large" placeholder="ID" prefix={<UserOutlined />} style={{height: "40px", width: "300px"}} />
    <Input.Password size="large" placeholder="password" prefix={<LockOutlined />} style={{height: "40px", width: "300px"}} />  
    <Button style={{fontSize:"16px", background: "#69b1ff", height: "40px", width: "300px"}}> 로그인</Button>
    <KakaoLogin />
  </Card>
      Login
    </div>
  )
}
