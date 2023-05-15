"use client";
import Link from "next/link";
import { Card, Space, Button, Image } from 'antd';
import KakaoLogin from "@/components/KakaoLogin";
import { useSession, signOut } from "next-auth/react";
import CardPage from "@/components/CardPage";
import Test from "@/components/Test";

export default function Restaurant() {
  return (
    <div>
      restaurant
      <Test />
      <CardPage />

    </div>
  )
}
