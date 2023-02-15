import React, { useEffect, useState } from "react";
import favoriteServices from "../../apiServices/favoriteServices";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/loader";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import productServices from "../../apiServices/productServices";
import axios from "axios";

function Favorites() {
  const [pelis, setPelis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    favoriteServices.getAll().then((data) => {
      setPelis(data);
      setIsLoading(false);
    });
  }, []);

  // function getAlldata() {
  //   productServices.getAll().then((data) => {
  //     setPelis(data);
  //     setIsLoading(false);
  //   });
  // }

  function getAllfavorites() {
    favoriteServices.getAll().then((data) => {
      setPelis(data);
      setIsLoading(false);
    });
  }
  const deleteById = async (idToDelete) => {
    await productServices.deleteById(idToDelete);
    let newPelis = pelis.filter((item) => item.id !== idToDelete);
    setPelis(newPelis);
  };

  const toogleToFavorite = (peli) => {
    console.log(peli);
    axios
      .put("https://63d919f474f386d4efe496e9.mockapi.io/movies/" + peli.id, {
        isFav: !peli.isFav,
      })
      .then((x) => getAllfavorites());
  };

  return (
    <div className={style.card}>
      <div className={style.img}>
        {isLoading ? (
          <Loader />
        ) : (
          pelis.map((peli) => (
            <div className={style.button_card}>
              <Link to={`movie/${peli.id}`}>
                <img
                  className={style.imgContent}
                  src={peli.movieURL}
                  alt="img"
                />
              </Link>
              <div className={style.buttons}>
                <CiTrash
                  className={style.delete}
                  onClick={() => deleteById(peli.id)}
                />
                {!peli.isFav ? (
                  <IoIosStarOutline
                    className={style.add}
                    onClick={() => toogleToFavorite(peli)}
                  />
                ) : (
                  <IoIosStar
                    className={style.favorite}
                    onClick={() => toogleToFavorite(peli)}
                  />
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;
