import axios from "axios";

const apiBase = "https://63d919f474f386d4efe496e9.mockapi.io/movies";

const productServices = {
  getAll() {
    return fetch(apiBase)
      .then((res) => res.json())
      .then((data) => data);
  },
  getById() {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },
};

export default productServices;
