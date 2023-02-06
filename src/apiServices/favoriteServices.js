import axios from "axios";

const apiFavs =
  "https://63d919f474f386d4efe496e9.mockapi.io/movies/?isFav=true";

const favoriteServices = {
  getAll() {
    return fetch(apiFavs)
      .then((res) => res.json())
      .then((data) => data);
  },
  getById(id) {
    return axios.get(apiFavs + `/${id}`).then((res) => res.data);
  },
};

export default favoriteServices;
