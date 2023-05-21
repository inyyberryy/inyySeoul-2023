"use client";
import React, { useEffect, useState } from 'react';
import { Modal } from 'antd'

const Test = ({ arr }) => {

  const [modal1Open, setModal1Open] = useState(false);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=f3b8f0537e978759c6006ee402cac005&autoload=false';

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5671141, 126.9784467),
          level: 5
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const positions = arr.map((x) => {
          const title = x.NAME_KOR;
          const latlng = new window.kakao.maps.LatLng(x.WGS84_Y, x.WGS84_X);
          const address = x.ADD_KOR;
          return { title, latlng, address };
        });

        const imageSrc =
          'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
        const imageSize = new window.kakao.maps.Size(24, 35);
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );

        for (let i = 0; i < positions.length; i++) {
          if (positions[i].latlng) {
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: positions[i].latlng,
              title: positions[i].title,
              image: markerImage
            });
            marker.setMap(map); // Add the marker to the map
            
            window.kakao.maps.event.addListener(marker, 'click', function () {
              console.log(marker)
              setTitle(marker.Gb);
              setAddress(positions[i].address);
              setModal1Open(true);
            });
          }
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [arr]);

  return <div id="map" style={{ width: '800px', height: '400px' }} >

    <Modal
      title={title}
      centered
      open={modal1Open}
      onCancel={() => setModal1Open(false)}
      footer={null}
      width={500}
    >
      <p>{address}</p>
      <p>내용 & 사진</p>
      <p>내용 & 사진</p>
    </Modal>
  </div>;
};

export default Test;