import React, { useEffect, useState } from "react";
import productServices from "../../apiServices/productServices";
import style from "./catalogue.module.css";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";

// const pelisData = [
//   { id: 1, name: "peli1", img: "algo.jpg" },
//   { id: 2, name: "peli2", img: "algo.jpg" },
//   { id: 3, name: "peli3", img: "algo.jpg" },
// ];

function Catalogue() {
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    productServices.getAll().then((data) => setPelis(data));
  }, []);

  const deleteById = async (idToDelete) => {
    await productServices.deleteById(idToDelete);
    let newPelis = pelis.filter((item) => item.id !== idToDelete);
    setPelis(newPelis);
  };

  return (
    <div className={style.card}>
      <div className={style.img}>
        {pelis.map((peli) => (
           <button onClick={() => deleteById(peli.id)}>
           <CiTrash />
          <Link to={`movie/${peli.id}`}>
            <img className={style.imgContent} src={peli.movieURL} alt="img"  />
          </Link>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
