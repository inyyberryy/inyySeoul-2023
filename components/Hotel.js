"use client";
import { Card, Meta, Button, Pagination } from 'antd';
import { useState, useEffect } from "react";
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import axios from "axios";

export default function Data() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://openapi.seoul.go.kr:8088/654571674f6331743338526e4c716b/json/SebcHotelListKor/1/1000/';
      const response = await axios.get(url);
      setArr(response.data.SebcHotelListKor.row);
    };
    fetchData();
  }, []);

  const [current, setCurrent] = useState(1);
  const total_card = 8;
  const lastNum = current * total_card;
  const startNum = lastNum - total_card;

  let sliceData = arr.slice(startNum, lastNum);

  return (
      <div>
          {sliceData.map(x => <HotelCard x={x} />)}
          <Pagination current={current} total={arr.length} defaultPageSize={total_card} showSizeChanger={false} 
          showLessItems={false} simple={true} onChange={(current) =>  setCurrent(current)} />

      </div>
  )
}

// 4   CATE3_NAME   분류3
// 6   NAME_KOR   명칭
// 7   H_KOR_CITY   행정 시
// 8   H_KOR_GU   행정 구
// 9   H_KOR_DONG   행정 동

function HotelCard({x}) {
  const { Meta } = Card;
  const [like, setLike] = useState(false);

  return (
      <Card
        hoverable
        style={{
          width: 280,
          position: "relative",
          margin: "25px 25px",
          display: "inline-block"
        }}
        cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/inyyfood.appspot.com/o/add%2FKakaoTalk_20230518_122633783_04.jpg?alt=media&token=806873b8-49fb-432c-9228-64ce1769b92a" />}
      >
        <Button shape="circle" icon={like ? <RiHeart3Fill style={{color:"pink"}} /> : <RiHeart3Line />} 
        style={{
          position: "absolute", 
          top: 10, right: 10, 
          fontSize: "18px"}} 
          onClick={() => setLike(!like) }/>
        <Meta title={x.NAME_KOR} description={"서울시" + " " + x.H_KOR_GU + " " + x.H_KOR_DONG} />
      </Card>
  );
}