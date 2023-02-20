import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productServices from "../../apiServices/productServices";
import style from "./FormPage.module.css";

const initMovie = {
  movieName: "Titulo de la pelicula",
  movieYear: "Año",
  movieURL:
    "https://www.shutterstock.com/image-vector/image-icon-260nw-211642900.jpg",
  isFav: false,
  Director: "Director",
  actores: [
    {
      name: "",
      img: "",
    },
  ],
  thumbnail: "",
  sinopsis: "Sinopsis...",
};

const FormPage = () => {
  const [newMovie, setNewMovie] = useState(initMovie);
  const navigator = useNavigate();
  let  { id } = useParams();

  useEffect(() => {
    productServices.editById(id).then((data) => {
      setNewMovie(data);
      console.log(data);
    });
  });

  const handleOnChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;
    const temp = (newMovie[name] = value);
    setNewMovie({ ...newMovie, temp });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await productServices.create(newMovie);
    navigator("/");
  };
  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit}>
        <div className={style.imageContainer}>
          <img src={newMovie.movieURL} alt="img" />
        </div>
        <section className={style.inputSection}>
          <input
            className={style.input}
            value={newMovie.movieName}
            onChange={handleOnChange}
            name="movieName"
            type="text"
            placeholder="Titulo de la pelicula"
          />
          <textarea
            onChange={handleOnChange}
            value={newMovie.sinopsis}
            name="sinopsis"
            id=""
            placeholder="Sinopsis"
          ></textarea>
          <textarea
            onChange={handleOnChange}
            value={newMovie.movieURL}
            name="movieURL"
            id=""
            placeholder="URL del poster"
          ></textarea>
          <input
            className={style.input}
            value={newMovie.Director}
            onChange={handleOnChange}
            name="Director"
            type="text"
            placeholder="Director"
          />
          <input
            className={style.input}
            value={newMovie.movieYear}
            onChange={handleOnChange}
            name="movieYear"
            type="text"
            placeholder="Año de la pelicula"
          />
          <input
            className={style.input}
            value={newMovie.movieTime}
            onChange={handleOnChange}
            name="movieTime"
            type="text"
            placeholder="Tiempo de la pelicula"
          />
          <textarea
            onChange={handleOnChange}
            value={newMovie.thumbnail}
            name="thumbnail"
            placeholder="URL Miniatura"
          ></textarea>
          <button type="submit">Añadir</button>
        </section>
      </form>
    </div>
  );
};

export default FormPage;
