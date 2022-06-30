import { posts } from '@/api/index';
import axios from 'axios';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2NTk3OTI3fQ.cy2aY78t9i6WHgRCCER3v28MSBAAo8O7j6snA2nc7b2LEJ5Ye1epUiGatU7KFWdYpKiMjWkuw58P29RdGiGjCA';
const Authorization = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export function getPosts() {
  return posts.get('', Authorization);
  // return axios.get(`api/init/user`);
  // return axios.get(`/api/init/user`);
}
export function getPostById(id) {
  return posts.get(id, Authorization);
}
export function createPost(data) {
  return posts.post(``, data);
}
export function updatePost(id, data) {
  return posts.put(`/${id}`, data);
}
export function deletePost(id) {
  return posts.delete(`/${id}`);
}
