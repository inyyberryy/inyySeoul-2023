"use client";
import { Card, Pagination, Button, Image, Drawer, Row, Col, Space, Typography } from 'antd';
import { RiHeart3Line, RiHeart3Fill } from 'react-icons/ri';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiPencilSquare } from 'react-icons/hi2';
const { Text, Link } = Typography;

export default function Data() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://openapi.seoul.go.kr:8088/654571674f6331743338526e4c716b/json/culturalEventInfo/1/1000/';
      const response = await axios.get(url);
      setArr(response.data.culturalEventInfo.row);
    };
    fetchData();
  }, []);

  const [current, setCurrent] = useState(1);
  const total_card = 4;
  const lastNum = current * total_card;
  const startNum = lastNum - total_card;

  let sliceData = arr.slice(startNum, lastNum);


  return (
    <div style={{ marginLeft: "25px" }}>
      <Row gutter={[16, 16]}>
        {sliceData.map((x, n) => (
          <Col key={n} xs={24} sm={12} md={8} lg={6}>
            <CardPage x={x} sliceData={sliceData} />
          </Col>
        ))}
      </Row>
      <Pagination
        current={current}
        total={arr.length}
        defaultPageSize={total_card}
        showSizeChanger={false}
        showLessItems={false}
        simple={true}
        onChange={(current) => setCurrent(current)}
        style={{fontSize:"20px"}}
      />    
    </div>
  )
}

function CardPage({ x }) {
  const { Meta } = Card;
  const [open, setOpen] = useState(false);
  const handleSite = () => {
    setOpen(!open);
  };
  return (
    <Card
      hoverable
      onClick={handleSite}
      style={{
        width: 275,
        position: "relative",
        marginRight: "50px",
        marginBottom: "50px",
        display: "inline-block"
      }}
      cover={<img alt="example" src={x.MAIN_IMG} style={{ width: 275, height: 380 }} />}
    >
      <Meta title={x.TITLE} description={<span style={{ whiteSpace: "nowrap" }}>{x.PLACE}</span>} />


      <Drawer title={x.TITLE} placement="left" onClose={handleSite} open={open} >
        <p><Text strong>분류 : </Text>{x.CODENAME}</p>
        <p><Text strong>공연행사명 : </Text>{x.TITLE}</p>
        <p><Text strong>날짜 : </Text>{x.DATE}</p>
        <p><Text strong>장소 : </Text>{x.PLACE}</p>
        <p><Text strong>이용 대상 : </Text>{x.USE_TRGT}</p>
        <p><Text strong>이용 요금 : </Text>{x.USE_FEE}</p>
        <p><Text strong>홈페이지 주소 : </Text><a href={x.ORG_LINK}>{x.ORG_LINK}</a></p>
        <p><Text strong>신청일 : </Text>{x.RGSTDATE}</p>
        <p><Text strong>시작일 : </Text>{x.STRTDATE}</p>
        <hr/>
        <Link href={{ pathname: '/createreview', query: { id: x.MAIN_KEY } }}  style={{float:'right'}}>
          <Button type="text" style={{fontSize:"15px"}}><HiPencilSquare /><Text strong underline>리뷰 작성</Text></Button>
        </Link>      
      </Drawer>
    </Card>
  )
}