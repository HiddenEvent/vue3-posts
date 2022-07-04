import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2OTUzMzY5fQ.I2FVWHZmzMrAVu-hdss2jAkcns9Vhv8aM7Fv-JoGLoi_sJmlzRU0Z_EAW-bP46EUV8fuDwgi42yoGrIwygmhjQ';
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
