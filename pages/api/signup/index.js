import database from '@/utils/database';

export default function Index(req, res) {
  console.log(req);
  res.status(200).json({message: '😍🤍'})

}
