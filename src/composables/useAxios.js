import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/api';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU3MDY4MTUyfQ.JHQ6vjmdXGZn9Gl0td8eedYMu1P7BJHKhIH24fGQ-YbHkqKSdjNHsFXuRNamZLJSVVXLfuC__2Z0viLtUcW4YQ';

axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
const defaultConfig = {
  method: 'get',
};

export const useAxios = (url, config = {}) => {
  const response = ref(null);
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const { params } = config;
  // 시작
  const execute = () => {
    data.value = null;
    error.value = null;
    loading.value = true;
    axios(url, {
      ...defaultConfig /*디폴트 get 요청 설정*/,
      ...config /*설정 덮어 씌우기*/,
      params: unref(params),
    })
      .then(res => {
        response.value = res.data.data;
        data.value = res.data.data.content;
      })
      .catch(err => {
        error.value = err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  if (isRef(params)) {
    /*데이터가 참조값일 경우 변경할 때마다 엑션*/
    watchEffect(execute);
  } else {
    /*데이터가 일반변수 일경우 한번만 엑션*/
    execute();
  }
  return {
    response,
    data,
    error,
    loading,
  };
};
