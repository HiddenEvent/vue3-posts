import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2NjY2ODEzfQ.69avzPJ2fzZkqrABJOb3N0m5RxTf9L1JkMbZe5Wq5AT3cAChY_OJa0Y7K_IQ2C2zEk3qciP2NXqdklft3lrUrQ';
const Authorization = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export function getPosts() {
  return posts.get('', Authorization);
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
