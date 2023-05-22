'use client';

export default function ImgApi(word) {
  const fetchImageURL = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/search/image?query=${word}`);
      const data = await response.json();
      const firstImageURL = data.items[0]?.link || '';
      let imageURL = firstImageURL;
      return imageURL
    } catch (error) {
      console.error('이미지 URL을 가져오는 중 오류가 발생했습니다:', error);
      return "https://firebasestorage.googleapis.com/v0/b/inyyfood.appspot.com/o/add%2FKakaoTalk_20230521_202740446.jpg?alt=media&token=69de708d-abd2-4bd4-9f1f-7ab217fc9140";
    }
  };
  return fetchImageURL
}