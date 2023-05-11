"use client";
import React from 'react';
import { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';


export default function Header() {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  return (
    <div>
      <Image 
      src="/logo.png"
      alt="inyySeoul"
      width={160} height={112} 
      />
      <div className="search_bar">
        <Input
          placeholder="검색해바"
          allowClear
          onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
      Header
    </div>
  )
}
