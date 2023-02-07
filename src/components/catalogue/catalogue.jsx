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
      <Movies
        style={style}
        pelis={pelis}
        Link={Link}
        CiTrash={CiTrash}
        deleteById={deleteById}
        CiStar={CiStar}
      />
    </div>
  );
}

export default Catalogue;
