import React, { useEffect, useState } from "react";
import productServices from "../../apiServices/productServices";
import style from "./catalogue.module.css";
import { Link } from "react-router-dom";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
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
    getAlldata();
  }, []);

  function getAlldata() {
    productServices.getAll().then((data) => {
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
      .then((x) => getAlldata());
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

export default Catalogue;
