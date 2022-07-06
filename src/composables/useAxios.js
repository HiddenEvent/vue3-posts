import axios from 'axios';
import { isRef, ref, unref, watchEffect } from 'vue';

axios.defaults.timeout = 10000;
axios.defaults.baseURL = '/api';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjb3PthqDtgbAiLCJpZCI6MywiZXhwIjoxNjU3MTc5Mzk5fQ.ccIw0XgDfldrpoo7PFFUBC9NCuVOThQmiwPVobtL-glFdEIEFNwktj7cMFyQ9u7r3xCzsW7B4kjYfRuoJhYcwA';

axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null;
const defaultConfig = {
  method: 'get',
};
const defaultOptions = {
  immediate: true,
};

export const useAxios = (url, config = {}, options = {}) => {
  const response = ref(null);
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  const { onSuccess, onError, immediate } = {
    ...defaultOptions,
    ...options,
  };

  const { params } = config;
  // 시작
  const execute = body => {
    data.value = null;
    error.value = null;
    loading.value = true;

    axios(unref(url), {
      ...defaultConfig /*디폴트 get 요청 설정*/,
      ...config /*설정 덮어 씌우기*/,
      params: unref(params),
      data: typeof body === 'object' ? body : {} /*watchEffect로 실행될 경우 함수로 들어오기때문에 예외처리*/,
    })
      .then(res => {
        response.value = res.data.data;
        if (res.data.data) {
          data.value = res.data.data.content;
        }
        if (onSuccess) {
          onSuccess(res);
        }
      })
      .catch(err => {
        error.value = err;
        if (onError) {
          onError(err);
        }
      })
      .finally(() => {
        loading.value = false;
      });
  };

  if (isRef(params) || isRef(url)) {
    /*데이터가 참조값일 경우 변경할 때마다 엑션*/
    watchEffect(execute);
  } else {
    /*데이터가 일반변수 일경우 한번만 엑션*/
    if (immediate) {
      execute();
    }
  }
  return {
    response,
    data,
    error,
    loading,
    execute,
  };
};
