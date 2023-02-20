import React, { useEffect, useState } from "react";
import productServices from "../../apiServices/productServices";
import style from "./catalogue.module.css";
import { Link } from "react-router-dom";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";
import { IoMdCreate } from "react-icons/io";
import { CiTrash } from "react-icons/ci";
import Loader from "../Loader/loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const pelisData = [
//   { id: 1, name: "peli1", img: "algo.jpg" },
//   { id: 2, name: "peli2", img: "algo.jpg" },
//   { id: 3, name: "peli3", img: "algo.jpg" },
// ];

function Catalogue() {
  const [pelis, setPelis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

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
    productServices
      .toogleToFavorite(peli.id, { isFav: !peli.isFav })

      .then((x) => getAlldata());
  };
  const addFavorite = () =>
    toast("✅ Añadido a favoritos", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const deleteFavorite = () =>
    toast("❌ Eliminado de favoritos", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const deleteMovie = () =>
    toast("❌ Pelicula eliminada", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div>
      <ToastContainer />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={style.inputContainer}>
          <input
            className={style.input}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Buscar..."
          />
        </div>
      )}
      <div className={style.card}>
        <div className={style.img}>
          {pelis
            .filter((peli) => {
              // expresion regular que "convierte" la mayusculas en minusculas (validaciond de inputs)
              const regex = new RegExp(search, "i");
              return regex.test(peli.movieName);
            })
            .map((pelis) => (
              <div className={style.button_card}>
                <Link to={`movie/${pelis.id}`}>
                  <img
                    className={style.imgContent}
                    src={pelis.movieURL}
                    alt="img"
                  />
                </Link>
                <div className={style.buttons}>
                  <CiTrash
                    className={style.delete}
                    onClick={() => deleteById(pelis.id)}
                    onClickCapture={deleteMovie}
                  />
                  {!pelis.isFav ? (
                    <IoIosStarOutline
                      className={style.add}
                      onClick={() => toogleToFavorite(pelis)}
                      onClickCapture={addFavorite}
                    />
                  ) : (
                    <IoIosStar
                      className={style.favorite}
                      onClick={() => toogleToFavorite(pelis)}
                      onClickCapture={deleteFavorite}
                    />
                  )}
                  <Link to={`movie/edit/${pelis.id}`}>
                    <IoMdCreate className={style.edit} />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Catalogue;
