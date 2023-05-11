"use client";
import { Input, Space, Button } from 'antd';
import Link from 'next/link';


export default function Category() {
  return (
    <Space direction='horizontal'>
      <Link href="/fun"><Button type="text" style={{fontSize:"20px"}}>🎡 즐길거리</Button></Link>
      <Link href="/subway"><Button type="text" style={{fontSize:"20px"}}>🚋 지하철</Button></Link>
      <Link href="/restaurant"><Button type="text" style={{fontSize:"20px"}}>🍙 맛집</Button></Link>
      <Link href="/accomodation"><Button type="text" style={{fontSize:"20px"}}>🏩 숙소</Button></Link>
      <Link href="/festival"><Button type="text" style={{fontSize:"20px"}}>🎏 축제</Button></Link>
    </Space>
  );
}