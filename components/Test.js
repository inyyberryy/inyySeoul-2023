import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [coffeeMarkers, setCoffeeMarkers] = useState([]);
  const [storeMarkers, setStoreMarkers] = useState([]);
  const [carparkMarkers, setCarparkMarkers] = useState([]);
  const [selectedType, setSelectedType] = useState("coffee");

  const coffeePositions = [
    { lat: 37.499590490909185, lng: 127.0263723554437 },
    { lat: 37.499427948430814, lng: 127.02794423197847 },
  ];

  const storePositions = [
    { lat: 37.497535461505684, lng: 127.02948149502778 },
    { lat: 37.49671536281186, lng: 127.03020491448352 },
    { lat: 37.496201943633714, lng: 127.02959405469642 },
  ];

  const carparkPositions = [
    { lat: 37.49966168796031, lng: 127.03007039430118 },
    { lat: 37.499463762912974, lng: 127.0288828824399 },
  ];

  const markerImageSrc =
    "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/category.png";

  useEffect(() => {
    if (typeof window.kakao !== "undefined") {
      const mapContainer = mapRef.current;
      const mapOption = {
        center: new window.kakao.maps.LatLng(
          37.498004414546934,
          127.02770621963765
        ),
        level: 3,
      };

      const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(newMap);
    }
  }, []);

  useEffect(() => {
    if (map !== null) {
      createMarkers("coffee", coffeePositions, coffeeMarkers, setCoffeeMarkers);
      createMarkers("store", storePositions, storeMarkers, setStoreMarkers);
      createMarkers(
        "carpark",
        carparkPositions,
        carparkMarkers,
        setCarparkMarkers
      );

      changeMarker(selectedType);
    }
  }, [map]);

  const createMarkerImage = (src, size, options) => {
    const markerImage = new window.kakao.maps.MarkerImage(src, size, options);
    return markerImage;
  };

  const createMarker = (position, image) => {
    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(position.lat, position.lng),
      image: image,
    });

    return marker;
  };

const createMarkers = (type, positions, markers, setMarkers) => {
  const imageSize = new window.kakao.maps.Size(22, 26);
  const imageOptions = {
    spriteOrigin: new window.kakao.maps.Point(
      10,
      type === "coffee" ? 0 : type === "store" ? 36 : 72
    ),
    spriteSize: new window.kakao.maps.Size(36, 98),
  };

  const markerImage = createMarkerImage(
    markerImageSrc,
    imageSize,
    imageOptions
  );

  const newMarkers = positions.map((position) =>
    createMarker(position, markerImage)
  );

  setMarkers(newMarkers);

  setMarkersOnMap(newMarkers, map); // 마커를 지도에 추가
};

  
    const setMarkersOnMap = (markers, map) => {
      markers.forEach((marker) => marker.setMap(map));
    };
  
    const changeMarker = (type) => {
      setSelectedType(type);
    
      const coffeeMenu = document.getElementById("coffeeMenu");
      const storeMenu = document.getElementById("storeMenu");
      const carparkMenu = document.getElementById("carparkMenu");
    
      if (coffeeMenu) {
        coffeeMenu.className = type === "coffee" ? "menu_selected" : "";
      }
      if (storeMenu) {
        storeMenu.className = type === "store" ? "menu_selected" : "";
      }
      if (carparkMenu) {
        carparkMenu.className = type === "carpark" ? "menu_selected" : "";
      }
    };
    
    useEffect(() => {
      if (map !== null) {
        createMarkers("coffee", coffeePositions, coffeeMarkers, setCoffeeMarkers);
        createMarkers("store", storePositions, storeMarkers, setStoreMarkers);
        createMarkers("carpark", carparkPositions, carparkMarkers, setCarparkMarkers);
    
        changeMarker(selectedType);
      }
    }, [map, selectedType]);
    
    useEffect(() => {
      setMarkersOnMap(coffeeMarkers, selectedType === "coffee" ? map : null);
      setMarkersOnMap(storeMarkers, selectedType === "store" ? map : null);
      setMarkersOnMap(carparkMarkers, selectedType === "carpark" ? map : null);
    }, [coffeeMarkers, storeMarkers, carparkMarkers, selectedType, map]);
    
  
    return <div id="map" ref={mapRef} style={{ width: "500px", height: "400px" }} />;
  };
  
  export default Test;
  