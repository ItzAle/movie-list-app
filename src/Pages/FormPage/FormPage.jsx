import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productServices from "../../apiServices/productServices";
import style from "./FormPage.module.css";

const initMovie = {
  movieName: "Titulo de la pelicula",
  movieYear: "Año",
  movieURL:
    "https://www.shutterstock.com/image-vector/image-icon-260nw-211642900.jpg",
  isFav: false,
  Director: "Director",
  actor1: "Actor1",
  actor1URL: "",
  actor2: "Actor2",
  actor2URL: "",
  actor3: "Actor3",
  actor3URL: "",
  actor4: "Actor4",
  actor4URL: "",
  actor5: "Actor5",
  actor5URL: "",
  thumbnail: "",
  sinopsis: "Sinopsis...",
};

const FormPage = () => {
  const [newMovie, setNewMovie] = useState(initMovie);
  const navigator = useNavigate();

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
          <input
            className={style.input}
            value={newMovie.actor1}
            onChange={handleOnChange}
            name="actor1"
            type="text"
            placeholder="Actor 1"
          />
          <textarea
            onChange={handleOnChange}
            value={newMovie.actor1URL}
            name="actor1URL"
            placeholder="URL Foto actor 1"
          ></textarea>
          <input
            className={style.input}
            value={newMovie.actor2}
            onChange={handleOnChange}
            name="actor2"
            type="text"
            placeholder="Actor 2"
          />
          <textarea
            onChange={handleOnChange}
            value={newMovie.actor2URL}
            name="actor2URL"
            placeholder="URL Foto Actor 2"
          ></textarea>
          <input
            className={style.input}
            value={newMovie.actor3}
            onChange={handleOnChange}
            name="actor3"
            type="text"
            placeholder="Actor 3"
          />
          <textarea
            onChange={handleOnChange}
            value={newMovie.actor3URL}
            name="actor3URL"
            placeholder="URL del Actor 3"
          ></textarea>
          <input
            className={style.input}
            value={newMovie.actor4}
            onChange={handleOnChange}
            name="actor4"
            type="text"
            placeholder="Actor 4"
          />
          <textarea
            onChange={handleOnChange}
            value={newMovie.actor4URL}
            name="actor4URL"
            placeholder="URL del Actor 4 "
          ></textarea>
          <input
            className={style.input}
            value={newMovie.actor5}
            onChange={handleOnChange}
            name="actor5"
            type="text"
            placeholder="Actor 5"
          />
          <textarea
            onChange={handleOnChange}
            value={newMovie.actor5URL}
            name="actor5URL"
            placeholder="URL del Actor 5 "
          ></textarea>
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
