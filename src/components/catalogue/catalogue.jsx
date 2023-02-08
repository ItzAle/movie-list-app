import React, { useEffect, useState } from "react";
import productServices from "../../apiServices/productServices";
import style from "./catalogue.module.css";
import { Link } from "react-router-dom";
import { CiTrash, CiStar } from "react-icons/ci";
import Movies from "../Movies/Movies";

// const pelisData = [
//   { id: 1, name: "peli1", img: "algo.jpg" },
//   { id: 2, name: "peli2", img: "algo.jpg" },
//   { id: 3, name: "peli3", img: "algo.jpg" },
// ];

function Catalogue() {
  const [pelis, setPelis] = useState([]);
  const [isFav, setIsFav] = useState([]);

  useEffect(() => {
    productServices.getAll().then((data) => setPelis(data));
  }, []);

  const deleteById = async (idToDelete) => {
    await productServices.deleteById(idToDelete);
    let newPelis = pelis.filter((item) => item.id !== idToDelete);
    setPelis(newPelis);
  };

  const addToFavorite = () => {
    productServices.addToFavorite(isFav);
  };

  const removeFavorite = (id) => {
    let index = isFav.indexOf(id);
    console.log(index);
    let temp = [...isFav.slice(0, index), ...isFav.slice(index + 1)];
    setIsFav(temp);
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
        {pelis.map((peli) => (
          <div className={style.button_card}>
            <Link to={`movie/${peli.id}`}>
              <img className={style.imgContent} src={peli.movieURL} alt="img" />
            </Link>
            <CiTrash
              className={style.delete}
              onClick={() => deleteById(peli.id)}
            />
            <CiStar onClick={() => addToFavorite()} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
