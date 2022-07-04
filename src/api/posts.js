import { posts } from '@/api/index';

// axios
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU2OTI2ODIwfQ.yWFCv82n4Vq7cEXPWf3__QUGQAQXt5Hg9nCFNlUiZlPK7n84NL3K7dMy-axeCG8qBkUgA02O1OuADbWbyC60uw';
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
