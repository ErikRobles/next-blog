import { server } from '../config/index';

// const API_URL = '/api/posts';
// endpoint: api/posts
export default async function getPost(id) {
  const res = await fetch(`/api/posts`, {
    origin: server,
  });
  const posts = await res.json();
  if (id) {
    return posts.find((value) => value.id == id);
  }
  return posts;
}
