'use client';

import React, { useState } from 'react';

export default function ImgApi(word) {
  let imageURL ='';

  const fetchImageURL = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/search/image?query=${word}`);
      const data = await response.json();
      const firstImageURL = data.items[0]?.link || '';
      imageURL = firstImageURL;
      console.log("sss"+imageURL);
      return imageURL
    } catch (error) {
      console.error('이미지 URL을 가져오는 중 오류가 발생했습니다:', error);
      return "실패"
    }
  };

  return fetchImageURL
}