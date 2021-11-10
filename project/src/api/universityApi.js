import axiosClient from "./axiosClient";

const universityApi = {
  getAll(params) {
    const url = "/search";
    return axiosClient.get(url, { params });
  },
};
export default universityApi;
