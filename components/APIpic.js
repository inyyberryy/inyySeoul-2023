"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const axios = require('axios');

// 네이버 API 요청을 보내는 함수
async function searchNaverImage(query) {
  const clientId = '8PtrwfWWdadZ7U8fJyEq'; // 네이버 API 클라이언트 ID
  const clientSecret = '4sf8k155UI'; // 네이버 API 클라이언트 시크릿

  try {
    const response = await axios.get('https://openapi.naver.com/v1/search/image', {
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
      params: {
        query,
        display: 1, // 가져올 이미지 개수 (1개로 설정)
      },
    });

    if (response.data.items.length > 0) {
      const imageUrl = response.data.items[0].link;
      console.log('대표 이미지 URL:', imageUrl);
    } else {
      console.log('이미지를 찾을 수 없습니다.');
    }
  } catch (error) {
    console.error('API 요청 중 오류가 발생했습니다:', error);
  }
}

// 특정 검색어로 네이버 이미지 검색 요청
searchNaverImage('사과');
