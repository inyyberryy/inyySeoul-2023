"use client";
import Link from "next/link";
import { Card, Space, Button, Image } from 'antd';
import KakaoLogin from "@/components/KakaoLogin";
import { useSession, signOut } from "next-auth/react";
import CardPage from "@/components/CardPage";
import Food from "@/components/Food";

export default function Restaurant() {
  return (
    <div>
      <h2 style={{marginLeft: "25px"}}>식당을 보여드릴게용!</h2>
      <Food />
    </div>
  )
}
