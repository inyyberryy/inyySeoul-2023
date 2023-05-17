"use client";
import { useSession } from "next-auth/react";

export default function Name() {
  const { data } = useSession(); 
  const userName = data?.user?.name || "Unknown";
  
  return (
    <>
      {userName}
    </>
  )
}
