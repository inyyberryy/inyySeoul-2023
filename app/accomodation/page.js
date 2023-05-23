"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Space, Button, Image } from 'antd';
import Hotel from "@/components/Hotel";


export default function Accomodation() {

  return (
    <div>
      <h2 style={{marginLeft: "25px"}}>숙소를 찾아볼까용?</h2>
      <Hotel />
    </div>
  )
}
