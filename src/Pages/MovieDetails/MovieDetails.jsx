import React, { useEffect, useState } from "react";
import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import productServices from "../../apiServices/productServices";
import Loader from "../../components/Loader/loader";

function MovieDetails() {
  let { id } = useParams();
  let [pelis, setPelis] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    productServices.getById(id).then((data) => {
      setPelis(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={style.movieDetail}>
      {isLoading ? <Loader /> : ""}
      <section className={style.details}>
        <img className={style.poster} src={pelis.movieURL} alt="img"></img>
        <img className={style.thumbnail} src={pelis.thumbnail} alt="img" />
      </section>
      <ul className={style.title}>
        <li className={style.name}>{pelis.movieName} </li>
        <li>Directed By: {pelis.Director} </li>
        <li>Año {pelis.movieYear}</li>
        <li>{pelis.movieTime}h</li>
      </ul>
      <div className={style.actorDiv}>
        {[
          pelis.actor1URL,
          pelis.actor2URL,
          pelis.actor3URL,
          pelis.actor4URL,
          pelis.actor5URL,
        ].map((actorURL, index) => (
          <img
            key={index}
            className={style.actorImagen}
            src={actorURL}
            alt="Actor"
          />
        ))}
        {[
          pelis.actor1,
          pelis.actor2,
          pelis.actor3,
          pelis.actor4,
          pelis.actor5,
        ].map((actor, index) => (
          <p key={index} className={style.actor} alt="Actor">
            {actor}
          </p>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;
