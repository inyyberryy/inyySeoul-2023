import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=f3b8f0537e978759c6006ee402cac005&autoload=false';    
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOption = {
          center: new kakao.maps.LatLng(37.5671141, 126.9784467),
          level: 2,
        };
        const map = new kakao.maps.Map(mapContainer, mapOption);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const locPosition = new kakao.maps.LatLng(lat, lon);
            const message = '<div style="padding:5px;">여기에 있나용?!</div>';
            displayMarker(locPosition, message);
          });
        } else {
          const locPosition = new kakao.maps.LatLng(36.3345250, 127.3887417);
          const message = '현재 위치를 알 수 없어용 🥺..';
          displayMarker(locPosition, message);
        }

        function displayMarker(locPosition, message) {
          const marker = new kakao.maps.Marker({
            map: map,
            position: locPosition,
          });

          const iwContent = message;
          const iwRemoveable = true;

          const infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });

          infowindow.open(map, marker);

          map.setCenter(locPosition);
        }
      });
    };
  }, []);

  return <div id="map" style={{ width: '800px', height: '400px' }}></div>;
};


export default KakaoMap;
