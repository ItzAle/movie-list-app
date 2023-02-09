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
          <section className={style.details}>
            <img className={style.poster} src={pelis.movieURL} alt="img"></img>
            <img className={style.thumbnail} src={pelis.thumbnail} alt="img" />
          </section>
          <ul className={style.title}>
            <li className={style.name}>{pelis.movieName} </li>
            <li>Directed By: {pelis.Director} </li>
            <li>Año {pelis.movieYear}</li>
            <li>{pelis.movieTime} Min.</li>
          </ul>
          <div className={style.actorDiv}>
            {pelis.actores.map((actor, index) => (
              <ActorCard index={index} actor={actor} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
