import axios from 'axios'
import qs from 'qs';

const axiosInstance = axios.create({
  // NOTE package.json proxy has been set
  baseURL: 'api',
  timeout: 4000,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
});

axiosInstance.interceptors.response.use(
  response => {
    return Promise.resolve(response);
  },
  error => {
    const { status, data, config } = error.response;
    if (status) {
      switch (status) {
        // unauthorized
        case 401:
          localStorage.clear();
          window.location.href = `/auth`;
          break;
      }
      return Promise.reject(error.response);
    }
  }
);

axiosInstance.interceptors.request.use(config => {
  config.paramsSerializer = params => qs.stringify(params);
  return config;
});

export default {
  get: (path, params) => axiosInstance({
    method: 'GET',
    url: path,
    params,
  }),
  post: (path, data) => axiosInstance({
    method: 'POST',
    url: path,
    data
  }),

}