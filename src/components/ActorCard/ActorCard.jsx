import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./ActorCard.module.css";
import productServices from "../../apiServices/productServices";
function ActorCard(actor, index) {
  let [pelis, setPelis] = useState({ actores: [] });
  let { id } = useParams();

  useEffect(() => {
    productServices.getById(id).then((data) => {
      setPelis(data);
      console.log(data);
      setIsLoading(false);
    });
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={style.actorCard}>
      {pelis.actores.map((actor, index) => (
        <div className={style.actordiv}>
          <li>
            <img
              key={index}
              src={actor.img}
              className={style.actorImagen}
              alt="actor"
            />
          </li>
          <li>
            <p>{actor.name}</p>
          </li>
        </div>
      ))}
    </div>
  );
}

export default ActorCard;
