import data from './data';

// api endpoint
// api/trending

export default function handler(req, res) {
  const { Trending } = data;
  if (Trending) return res.status(200).json(Trending);
  return res.status(404).json({ message: 'No Trending data found' });
}
