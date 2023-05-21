const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;
const clientId = 'jk_j68LlwwlMBc_8xsFA'; // 본인의 네이버 API 클라이언트 ID로 대체
const clientSecret = 'aIQN_IgJm5'; // 본인의 네이버 API 클라이언트 시크릿으로 대체

// CORS 미들웨어 활성화
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// API 라우트 정의
app.get('/api/search/image', async (req, res) => {
  const query = req.query.query;
  const apiURL = `https://openapi.naver.com/v1/search/image.json?query=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(apiURL, {
      headers: {
        'X-Naver-Client-Id': clientId,
        'X-Naver-Client-Secret': clientSecret,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error('API 요청 중 오류가 발생했습니다:', error);
    res.status(error.response.status || 500).end();
  }
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});