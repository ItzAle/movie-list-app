import axios from "axios";

const apiBase = "https://63d919f474f386d4efe496e9.mockapi.io/movies";

const productServices = {
  getAll() {
    return fetch(apiBase)
      .then((res) => res.json())
      .then((data) => data);
  },
  getById(id) {
    return axios.get(apiBase + `/${id}`).then((res) => res.data);
  },
  deleteById(id) {
    return axios
      .delete(apiBase + `/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },
  create(data) {
    return axios
      .post(apiBase, data)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  },


 editById(id, changes) {
  return axios
    .put(
      `https://63d919f474f386d4efe496e9.mockapi.io/movies/${id}`,
      changes
    )
    .then((response) => response.data);
},
  
  toogleToFavorite(id, changes) {
    return axios
      .put(
        `https://63d919f474f386d4efe496e9.mockapi.io/movies/${id}`,
        changes
      )
      .then((response) => response.data);
  },

};

export default productServices;
