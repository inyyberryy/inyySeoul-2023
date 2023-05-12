"use client";
import Image from 'next/image'; 
import Link from "next/link";
import { Input, Space, Button } from 'antd';
import { CgProfile } from 'react-icons/cg';


export default function Mypage() {
  
  const inputStyle = {
    display: 'flex',
    justifyContent: 'center',
    border: 'none',
    boxShadow: 'none',
    outline: 'none',
    paddingLeft: '10px'
  };

  return (
    <Space 
    style={{
      position: "relative", // absolute의 기준점은 가장 가까운 relative 상태인 부모
      display: "flex",
      flexDirection: "column",
      alignItems: "center" }} 
    direction='vertical' >
      <div><Button
      style={{
        fontSize:"18px", 
        background: "#69b1ff", 
        position: "absolute", 
        top: 20, right: 20}}>편집</Button></div>
      
      <Image src="/1.jpg" 
          width={200} height={200} 
          style={{borderRadius: '50%', padding: '3px'}}
        />
      <div>박세인</div>


      <div direction='vertical'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', minWidth: '150px' }}>이름</span>
        <Input size="large" placeholder="이름" style={{ ...inputStyle }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', minWidth: '150px' }}>이메일</span>
        <Input size="large" placeholder="이메일" style={{ ...inputStyle }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', minWidth: '150px' }}>비밀번호</span>
        <Input.Password size="large" placeholder="비밀번호" style={{ ...inputStyle }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', minWidth: '150px' }}>비밀번호 확인</span>
        <Input.Password size="large" placeholder="비밀번호 확인" style={{ ...inputStyle }} />
      </div>
      </div>
    </Space>
  )
}