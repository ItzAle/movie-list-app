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
    <div className={style.details}>
      <img className={style.poster} src={pelis.movieURL} alt="img"></img>
      <img className={style.thumbnail} src={pelis.thumbnail} alt="" />
      <div className={style.infoDiv}>
        <p className={style.title}>{pelis.movieName} </p>
        <p className={style.date}>
          {pelis.movieYear} {pelis.movieTime}h{" "}
        </p>
        <p className={style.Director}>
          <span>Directed By: </span>
          {pelis.Director}
        </p>
      </div>
      <div className={style.actorDiv}>
        <img className={style.actorImagen} src={pelis.actor1URL} alt="" />
        <img className={style.actorImagen} src={pelis.actor2URL} alt="" />
        <img className={style.actorImagen} src={pelis.actor3URL} alt="" />
        <img className={style.actorImagen} src={pelis.actor4URL} alt="" />
        <img className={style.actorImagen} src={pelis.actor5URL} alt="" />
      </div>
    </div>
  );
}

export default MovieDetails;
