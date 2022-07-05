import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU3MDIzOTAwfQ.M7vme__UH5KNKhRRW8lQd063g6qvskr6qB7elTrBoeYyShR52vVBFYVwytQm2w7dX65jlf0HDyoLk1X_DuYf2g';
const Authorization = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export function getPosts(number) {
  return posts.get('', {
    params: {
      number,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
export function getPostById(id) {
  return posts.get(`/${id}`, Authorization);
}
export function createPost(data) {
  return posts.post(``, data, Authorization);
}
export function updatePost(id, data) {
  return posts.put(`/${id}`, data, Authorization);
}
export function deletePost(id) {
  return posts.delete(`/${id}`, Authorization);
}
