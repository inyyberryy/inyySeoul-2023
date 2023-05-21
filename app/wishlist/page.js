"use client";
import React, { useEffect, useState } from 'react';
import { Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export default function Wishlist() {
  
  return (
    <Space direction='horizontal'>
      <Button type="text" style={{fontSize:"20px"}}>전체</Button>
      <Button type="text" style={{fontSize:"20px"}}>🍙 맛집</Button>
      <Button type="text" style={{fontSize:"20px"}}>🏩 숙소</Button>
      <Button type="text" style={{fontSize:"20px"}}>🎏 축제</Button>
    </Space>
  )
}
