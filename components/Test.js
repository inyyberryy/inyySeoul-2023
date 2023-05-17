"use client";
import React, { useEffect } from 'react';

const Test = ({ arr }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=f3b8f0537e978759c6006ee402cac005&autoload=false';

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new window.kakao.maps.LatLng(37.5671141, 126.9784467),
          level: 4
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        function inputV(x) {
          const title = x?.KOR_NAME;
          const latlng = x?.WGS84_X && x?.WGS84_Y ? new window.kakao.maps.LatLng(x.WGS84_X, x.WGS84_Y) : null;
          return { title, latlng };
        }

        const positions = arr.map(x => {inputV(x)});
        console.log(positions);

        for (let i = 0; i < positions.length; i++) {
          if (positions[i].latlng) {
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: positions[i].latlng,
              title: positions[i].title,
            });
            marker.setMap(map); // 마커를 지도에 추가
          }
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '800px', height: '400px' }} />;
};

export default Test;