const apiBase = "https://63d919f474f386d4efe496e9.mockapi.io/movies";

const productServices = {
  getAll() {
    return  fetch(apiBase)
      .then((res) => res.json)
      .then((data) => data);
  },
};

export default productServices;
