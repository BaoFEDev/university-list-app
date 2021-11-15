import axiosClient1 from "./axiosClient1";

const universityApi = {
  getAll(params) {
    const url = "/search";
    return axiosClient1.get(url, { params });
  },
};
export default universityApi;
