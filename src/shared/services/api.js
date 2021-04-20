import axios from 'axios'

const axiosInstance = axios.create({
  // NOTE package.json proxy has been set
  // baseURL: process.env.REACT_APP_API,
  timeout: 4000,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  }
});

axiosInstance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    const { status, data, config, statusText } = error.response
    if (status) {
      switch (status) {
        // unauthorized
        case 401:
          localStorage.clear();
          window.location.href = `/auth`;
          break;
        default:
          console.warn(statusText);
      }
      return Promise.reject(error.response);
    }
  }
);


export default {
  get: (path) => axiosInstance({
    method: 'GET',
    url: path
  }),
  post: (path, data) => axiosInstance({
    method: 'POST',
    url: path,
    data
  }),

}