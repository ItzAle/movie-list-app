import React, { useEffect, useState } from "react";
import favoriteServices from "../../apiServices/favoriteServices";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";


function Favorites() {
  const [pelis, setPelis] = useState([]);

  useEffect(() => {
    favoriteServices.getAll().then((data) => setPelis(data));
   
  }, []);
  return (
    <div>
      <div className={style.img}>
        {pelis.map((peli) => (
          <Link to={`movie/${peli.id}`}>
            <img className={style.imgContent} src={peli.movieURL} alt="img" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Favorites;
