import {connectDB} from '@/utils/database';

export default async function handler(req, res) {
  try {
    let db = (await connectDB).db('inyySeoul');
    await db.collection('user').insertOne(req.body);
    res.status(200).json('성공');
  } catch (error) {
    console.error('Error:', error);
    res.status(499).json({ error: 'Internal Server Error' }); // 에러 발생 시 적절한 에러 응답 반환
  }
}