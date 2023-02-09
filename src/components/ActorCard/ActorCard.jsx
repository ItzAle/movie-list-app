import React, { useState } from "react";
import style from "./ActorCard.module.css";
function ActorCard(actor, index) {
  let [pelis, setPelis] = useState({ actores: [] });

  return (
    <div>
      <ul>
        <li>
          <img
            key={index}
            className={style.actorImagen}
            src={actor.img}
            alt="actor"
          />
        </li>
        <li>
          <p>{actor.name}</p>
        </li>
      </ul>
    </div>
  );
}

export default ActorCard;
