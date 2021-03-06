import axios from "axios";

const axiosClient1 = axios.create({
  baseURL: "http://universities.hipolabs.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

//Interceptor
// Add a request interceptor
axiosClient1.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient1.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);

export default axiosClient1;
