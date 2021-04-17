import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API

const config = {
  proxy: {
    host: 'localhost',
    port: process.env.REACT_APP_API
  }
}


export const request = (action = 'get', endpoint = '', param) => {
  axios.get(`${BASE_URL}/${endpoint}`).then((res) => {
  }, config)
}