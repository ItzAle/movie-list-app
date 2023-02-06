import React from "react";
import style from "./Movies.module.css";
function Movies({ deleteById, style, Link, CiTrash, pelis }) {
  return (
    <div className={style.img}>
      {pelis.map((peli) => (
        <div className={style.button_card}>
          <Link to={`movie/${peli.id}`}>
            <img className={style.imgContent} src={peli.movieURL} alt="img" />
          </Link>
          <CiTrash
            className={style.delete}
            onClick={() => deleteById(peli.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default Movies;
