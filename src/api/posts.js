import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2OTQ5Njk4fQ.BQhtfMdSKNebprs6OxT3m-cmdZ_uOe7SuMTJSPp8imoeI0sLbv9lnHeib_P8-dcLWzziCPeKH5HLaK49VhloDA';
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
