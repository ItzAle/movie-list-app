import React, { useEffect, useState } from "react";
import productServices from "../../apiServices/productServices";
import style from "./catalogue.module.css";
import { Link } from "react-router-dom";
import { CiTrash, CiStar, CiCircleRemove } from "react-icons/ci";
import Movies from "../Movies/Movies";
import axios from "axios";
import Loader from "../Loader/loader";

// const pelisData = [
//   { id: 1, name: "peli1", img: "algo.jpg" },
//   { id: 2, name: "peli2", img: "algo.jpg" },
//   { id: 3, name: "peli3", img: "algo.jpg" },
// ];

function Catalogue() {
  const [pelis, setPelis] = useState([]);
  const [isFav, setIsFav] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices.getAll().then((data) => {
      setPelis(data);
      setIsLoading(false);
    });
  }, []);

  const deleteById = async (idToDelete) => {
    await productServices.deleteById(idToDelete);
    let newPelis = pelis.filter((item) => item.id !== idToDelete);
    setPelis(newPelis);
  };

  const addToFavorite = (id) => {
    console.log(id);
    axios.put("https://63d919f474f386d4efe496e9.mockapi.io/movies/" + id, {
      isFav: true,
    });
  };

  const removeFavorite = (id) => {
    let index = isFav.indexOf(id);
    console.log(id);
    axios.put("https://63d919f474f386d4efe496e9.mockapi.io/movies/" + id, {
      isFav: false,
    });
  };

  return (
    <div className={style.card}>
      {/* <Movies
        style={style}
        pelis={pelis}
        Link={Link}
        CiTrash={CiTrash}
        deleteById={deleteById}
        CiStar={CiStar}
      /> */}
      <div className={style.img}>
        {isLoading ? <Loader /> : ""}
        {pelis.map((peli) => (
          <div className={style.button_card}>
            <Link to={`movie/${peli.id}`}>
              <img className={style.imgContent} src={peli.movieURL} alt="img" />
            </Link>
            <CiTrash
              className={style.delete}
              onClick={() => deleteById(peli.id)}
            />
            <CiStar onClick={() => addToFavorite(peli.id)} />
            <CiCircleRemove onClick={() => removeFavorite(peli.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
