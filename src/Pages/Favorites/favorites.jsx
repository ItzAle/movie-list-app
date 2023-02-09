import React, { useEffect, useState } from "react";
import favoriteServices from "../../apiServices/favoriteServices";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/loader";

function Favorites() {
  const [pelis, setPelis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    favoriteServices.getAll().then((data) => {
      setPelis(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <div className={style.img}>
        {isLoading ? <Loader /> : ""}
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
