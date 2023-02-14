import React, { useEffect, useState } from "react";
import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import productServices from "../../apiServices/productServices";
import Loader from "../../components/Loader/loader";
import ActorCard from "../../components/ActorCard/ActorCard";

function MovieDetails() {
  let { id } = useParams();
  let [pelis, setPelis] = useState({ actores: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices.getById(id).then((data) => {
      setPelis(data);
      console.log(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={style.movieDetail}>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className={style.infoCard}>
            <section className={style.details}>
              <img
                className={style.poster}
                src={pelis.movieURL}
                alt="img"
              ></img>
              <img
                className={style.thumbnail}
                src={pelis.thumbnail}
                alt="img"
              />
            </section>
            <ul className={style.title}>
              <li className={style.name}>{pelis.movieName} </li>
              <li>
                {" "}
                <span> Directed By:</span> {pelis.Director}{" "}
              </li>
              <li>
                {" "}
                <span> Año: </span>
                {pelis.movieYear}
              </li>
              <li>
                {" "}
                {pelis.movieTime} <span>Min.</span>
              </li>
            </ul>
          </div>
          <div className={style.Sinopsis}>
            <h1 className={style.Sinopsis_title}>Sinopsis: </h1>
            <h1>{pelis.Sinopsis}</h1>
          </div>
          <div className={ActorCard}></div>
          <ActorCard />
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
