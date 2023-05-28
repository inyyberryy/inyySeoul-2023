"use client";
import KakaoMap from '@/components/KakaoMap';
import AutoplayImg from '@/components/AutoplayImg';
import Link from 'next/link';
import { HiPencilSquare } from 'react-icons/hi2';
import Culture from '@/components/Culture';

export default function Fun() {
  return (
    <div style={{marginLeft: "25px"}}>
      <h2>즐길거리를 추천해드려요!</h2>
      <Culture />
    </div>
  );
}