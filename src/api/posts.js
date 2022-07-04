import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2OTEwNTYwfQ.NHyiWfNFYHiECaHg-9_lBl0SuaSrbzFAwVlYWkU3-lNTg_aIUmHlgku5JpKdal6OI7Mg6D_719AO37WKTcLC0A';
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
  return posts.get(id, Authorization);
}
export function createPost(data) {
  return posts.post(``, data, Authorization);
}
export function updatePost(id, data) {
  return posts.put(id, data, Authorization);
}
export function deletePost(id) {
  return posts.delete(id, Authorization);
}
