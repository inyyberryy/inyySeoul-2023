"use client";
import React from 'react';
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { Input, Space, Button } from 'antd';

function LoginTrue() {
  
}

export default function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  

  return (
    <Space direction='horizontal'>
      <Image 
        src="/logo.png"
        alt="inyySeoul"
        width={170} height={112} 
      />

      <Space className="search_bar">
        <Search
          placeholder="검색해바"
          allowClear
          onSearch={onSearch}
          size="large" 
          enterButton  // 이거 돋보기 버튼 색! 
          style={{
            width: 400,
          }}
        />
      </Space>
      <Space className="login_signup_button">
      <Link href="../login"><Button size="large" style={{ background: "skyblue" }}>로그인</Button></Link>
      <Link href="../signup"><Button size="large" style={{ background: "#4096ff" }}>회원가입</Button></Link>
      </Space>
    </Space>
  )
}
