import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU3MTA4NzM0fQ.0eWec_NqeIiQhcw5DIc9VBHH5nuud2A9iZ_tKZAJLdAzU0MqbvK0OIYd-CtHNw9FtYpStPpHLm6VXxFIo5Z3Qg';
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
