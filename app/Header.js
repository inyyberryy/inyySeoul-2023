"use client";
import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { Input, Space, Button, Tooltip } from 'antd';
import { CgProfile } from 'react-icons/cg';
import { HiPencilSquare } from 'react-icons/hi2';

function LoginTrue({setId}) {
  return (
  <div className='login_true_line'>
    <Link href="/createreview"><Button type="text" style={{fontSize:"18px"}}><HiPencilSquare /></Button></Link>
    <Link href="/myreview"><Button type="text" style={{fontSize:"18px"}}>내 리뷰</Button></Link>
    <Link href="/wishlist"><Button type="text" style={{fontSize:"18px"}}>위시리스트</Button></Link>
    <Tooltip title={<LoginToolTip />} placement='bottomRight' color={'skyblue'} >
      <Link href="/"><Button type="text" style={{fontSize:"18px"}}><CgProfile /></Button></Link>
    </Tooltip>
  </div>
  );
}

function LoginFalse({setId}) {
  return (
    <Space className="login_signup_line">
      <Link href="../login"><Button size="large" style={{ background: "skyblue" }} onClick={() => setId(true)}>로그인</Button></Link>
      <Link href="../signup"><Button size="large" style={{ background: "#4096ff" }}>회원가입</Button></Link>
    </Space>
    );
}

function LoginToolTip() {
  return (
    <Space direction='vertical'>
    <Space direction='horizontal'>
      <Image src="/1.jpg" 
      width={60} height={60} 
      style={{borderRadius: '50%', padding: '3px'}}
      />
    <Space direction='vertical'>
    <Button size="middle" type="text" style={{color:'black', fontSize: '16px', height: '32px', width:'100px'}}>박세인</Button>
    <Link href="/mypage"><Button size="middle" type="text" style={{color:'blue', fontSize: '16px', height: '32px', width:'100px'}}>프로필 관리</Button></Link>
    </Space>
    </Space>
      <hr />
    <Button size="middle" type="text" style={{color:'black', fontSize: '16px', height: '35px', width:'170px'}}>로그아웃</Button>
    </Space>
  );
}

export default function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [id, setId] = useState(false);

  return (
    <Space direction='horizontal'>
      <Image 
        src="/logo.png"
        alt="inyySeoul"
        width={150} height={112} 
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
      { id ? <LoginTrue setId={setId} /> : <LoginFalse setId={setId} /> }
    </Space>
  )
}