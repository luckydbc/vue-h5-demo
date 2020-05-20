/*
 * @Author: dongbc
 * @Date: 2020-02-20 16:19:06
 * @LastEditTime : 2020-02-20 19:08:00
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h5-school-official/src/services/api.js
 */
import axios from "axios";
import { getToken } from "@/utils/cookie";
import config from "@/config";

// 创建axios实例
const api = axios.create({
  baseURL: config.API_URL, // 后台 api 的 url
  timeout: config.API_TIMEOUT, // 请求超时时间
  validateStatus: function(status) {
    return status < 500; // Reject only if the status code is greater than or equal to 500
  }
});

api.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    config.headers["Authorization"] = getToken();
    // config.headers['Authorization'] =
    //   'lYERsXt2SmcxLskCFIX5mMLFpyrNe9zYDlIeFMpP7P0lOxuvZWD3s9SS2AhN'
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  function(response) {
    // Do something with response data
    if (response.data.status_code === 401) {
      location.href = '/login'
    }
    if (response.data.status_code === 200) {
      response.data.ok = true;
    } else {
      console.error("error");
    }
    return response.data;
  },
  function(error) {
    error.request &&
      error.request.readyState === 4 &&
      console.error("network error");
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
