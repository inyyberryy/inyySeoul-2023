"use client";
import KakaoMap from '@/components/KakaoMap';
import AutoplayImg from '@/components/AutoplayImg';

export default function Fun() {
  return (
    <div style={{marginLeft: "25px"}}>
      <h2>즐길거리를 추천해드려요!</h2>
      <KakaoMap />
      <AutoplayImg />
    </div>
  );
}