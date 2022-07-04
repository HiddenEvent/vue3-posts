import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2OTE4NTQzfQ.C1TeHfOYX5k52lviIBYoHNsa3y8ptv7xWnpR1MGv0plfCXpW2eiVoRgpt8rWOHaJEpWCadD4OZ2vgEhTb5ngTg';
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
