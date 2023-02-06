import React, { useEffect, useState } from "react";
import style from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import productServices from "../../apiServices/productServices";

function MovieDetails() {
  let { id } = useParams();
  let [pelis, setPelis] = useState({});
  useEffect(() => {
    productServices.getById(id).then((data) => setPelis(data));
  }, []);
  return (
    <div className={style.movieDetail}>
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
      </div>
    </div>
  );
}

export default MovieDetails;
