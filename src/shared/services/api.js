import axios from 'axios'

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
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    const { status, data, config } = error
    if (status) {
      switch (status) {
        // unauthorized
        case 401:
          localStorage.clear();
          window.location.href = `/auth`;
          break;
        default:
          console.warn(error);
      }
      return Promise.reject(error.response);
    }
  }
);


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