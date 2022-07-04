import axios from 'axios';
axios.defaults.timeout = 10000;
function create(baseURL, options) {
  return axios.create(Object.assign({ baseURL }, options));
}
// export const posts = create(`${import.meta.env.VITE_APP_API_URL}api/post/`); /*프록시 적용으로 인한 제외*/
export const posts = create(`/api/post`);
