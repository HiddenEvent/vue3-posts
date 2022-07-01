import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2Njc0Nzc4fQ.UNWyiSXp3MeAi8Mc1Fy30BCX5c6Uvv79zrGPc-RYZBsYBfN6XHgxEi6r_5zUnQoNdS6fiuG8Z7iE6ugDqANuLw';
const Authorization = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export function getPosts(pageNumber) {
  return posts.get(
    '',
    {
      params: {
        pageNumber,
      },
    },
    Authorization,
  );
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
