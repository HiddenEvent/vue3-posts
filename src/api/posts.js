import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2OTU1MzA3fQ.8qVcR-EaaI56YNFmVQh4OH0ZHJyIHrPPnarUvgF3P3UKmT5qHXruI0VYZPpfsTKUMiyaw-p98HZErBXWEdv4_Q';
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
