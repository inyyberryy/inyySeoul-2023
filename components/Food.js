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
            const url = 'http://openapi.seoul.go.kr:8088/654571674f6331743338526e4c716b/json/SebcKoreanRestaurantsKor/1/1000/';
            const response = await axios.get(url);
            setArr(response.data.SebcKoreanRestaurantsKor.row);
        };
        fetchData();
    }, []);

    const [current, setCurrent] = useState(1);
    const total_card = 8;
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
      />  
    </div>
    )
  }

function CardPage({ x, sliceData }) {
    const { Meta } = Card;
    const [like, setLike] = useState(false);
    const [imageURL, setImageURL] = useState('');
    const [open, setOpen] = useState(false);

    const handleSite = () => {
        setOpen(!open);
      };

    const address = "서울시" + " " + x.H_KOR_GU + " " + x.H_KOR_DONG;


    useEffect(() => {
        const fetchImageURL = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/search/image?query=' + x.NAME_KOR);
                const data = await response.json();
                setImageURL(data.items[0]?.link || 'https://firebasestorage.googleapis.com/v0/b/inyyfood.appspot.com/o/add%2FKakaoTalk_20230521_202740446.jpg?alt=media&token=69de708d-abd2-4bd4-9f1f-7ab217fc9140');
            } catch (error) {
                console.error('Hotel.js 이미지 URL을 가져오는 중 오류가 발생했습니다:', error);
            }
        };
        fetchImageURL();
    }, [sliceData]);


    return (
        <Card
            hoverable
            style={{
                width: "280px", // Card 크기를 고정시키기 위해 width 값을 지정
                position: "relative",
                display: "flex",
                flexDirection: "column"
              }}
            onClick={() => setOpen(!open)}
            cover={<img alt="example" src={imageURL} style={{ width: "100%", height: "320px", objectFit: "cover" }} />}
            >
            <Meta title={x.TITLE} description={<span style={{ whiteSpace: "nowrap" }}>{x.PLACE}</span>} />

            <Button shape="circle" icon={like ? <RiHeart3Fill style={{ color: "pink" }} /> : <RiHeart3Line />}
                style={{
                    position: "absolute",
                    top: 10, right: 10,
                    fontSize: "18px"
                }}
                onClick={() => setLike(!like)} />
            <Meta title={x.NAME_KOR} description={address} />
            
            <Drawer title={x.TITLE} placement="left" onClose={handleSite} open={open} >
                <p><Text strong>이름 : </Text>{x.NAME_KOR}</p>
                <p><Text strong>주소 : </Text>{address}</p>
                <hr/>
            <Link href={{ pathname: '/createreview', query: { id: x.MAIN_KEY } }}  style={{float:'right'}}>
                <Button type="text" style={{fontSize:"15px"}}><HiPencilSquare /><Text strong underline>리뷰 작성</Text></Button>
            </Link>      
            </Drawer>
        </Card>
    )
}