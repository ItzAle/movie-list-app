import React, { useEffect, useState } from "react";
import productServices from "../../apiServices/productServices";
import style from "./catalogue.module.css";
import { Link } from "react-router-dom";
const pelisData = [
  { id: 1, name: "peli1", img: "algo.jpg" },
  { id: 2, name: "peli2", img: "algo.jpg" },
  { id: 3, name: "peli3", img: "algo.jpg" },
];

function Catalogue() {
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    productServices.getAll().then((data) => setPelis(data));
    // setPelis(pelisData)
  }, []);

  return (
    <div className={style.card}>
      <div className={style.img}>
        <Link to={"/movie1"}>
          {pelis.map((peli) => (
            <img className={style.imgContent} src={peli.movieURL} alt="img" />
          ))}
        </Link>
      </div>
    </div>
  );
}

export default Catalogue;
