"use client";
import { Button } from 'antd';
import { TbMessageCircle2Filled } from "react-icons/tb";
import { signIn } from 'next-auth/react'

export default async function KakaoLogin() {

    return (
        <Button style={{ fontSize: "16px", background: "#fadb14", height: "40px", width: "300px" }}
            onClick={() => { signIn("kakao") }}> <TbMessageCircle2Filled />
            카카오로 바로 시작</Button>
    );
}