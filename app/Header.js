"use client";
import React from 'react';
import { useState } from 'react';
import Link from "next/link";
import { Input, Space, Button, Tooltip, Image } from 'antd';
import { CgProfile } from 'react-icons/cg';
import ImageWeb from 'next/image';
import { HiPencilSquare } from 'react-icons/hi2';
import { useSession, signOut } from "next-auth/react";

function LoginTrue({}) {
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

function LoginFalse({}) {
  return (
    <Space className="login_signup_line">
      <Link href="../login"><Button size="large" style={{ background: "skyblue" }} >로그인</Button></Link>
      <Link href="../signup"><Button size="large" style={{ background: "#4096ff" }}>회원가입</Button></Link>
    </Space>
    );
}

function LoginToolTip() {
  const { data } = useSession();  // data.user.머시기 (email, name, image)
  const userProfileImg = data?.user?.image;

  return (
    <Space direction='vertical'>
    <Space direction='horizontal'>
      <Image
        src={userProfileImg}
        width={60} height={60} 
        style={{borderRadius: '50%', padding: '3px'}}
      />
    <Space direction='vertical'>
    <Button size="middle" type="text" style={{color:'black', fontSize: '16px', height: '32px', width:'100px'}}>{data.user.name}</Button>
    <Link href="/mypage"><Button size="middle" type="text" style={{color:'blue', fontSize: '16px', height: '32px', width:'100px'}}>프로필 관리</Button></Link>
    </Space>
    </Space>
      <hr />
    <Button size="middle" type="text" style={{color:'black', fontSize: '16px', height: '35px', width:'170px'}} onClick={() => signOut()}>로그아웃</Button>
    </Space>
  );
}

export default function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const { data } = useSession();

  return (
    <Space direction='horizontal'>
      <Link href="/">
        <ImageWeb 
          src="/logo.png"
          alt="inyySeoul"
          width={165} height={112} 
        />
      </Link>

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
      { data?.user ? <LoginTrue /> : <LoginFalse /> } {/* data 안에 user가 있으면 user를 반환, 없으면 undefined 반환 */}
    </Space>
  )
}