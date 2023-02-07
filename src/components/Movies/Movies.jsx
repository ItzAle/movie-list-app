import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import style from "./Movies.module.css";

function Movies({ deleteById, style, Link, CiTrash, pelis }) {
  const [isFav, setIsFav] = useState(false);

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
          <CiStar onClick={() => setIsFav((previsFav) => !previsFav)} />
        </div>
      ))}
    </div>
  );
}

export default Movies;
