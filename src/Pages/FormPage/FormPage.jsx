import React, { useState } from "react";
import style from "./FormPage.module.css";

const initMovie = {
  title: "default title",
  img: "https://www.shutterstock.com/image-vector/image-icon-260nw-211642900.jpg",
  isFav: false,
};

const FormPage = () => {
  const [newMovie, setNewMovie] = useState(initMovie);

  return (
    <div>
      <form className={style.container}>
        <div className="imageContainer">
          <img src={newMovie.img} alt="img" />
        </div>
        <section className={style.inputSection}>
          <input
            value={newMovie.title}
            name="title"
            type="text"
            placeholder="insert text"
          />
          <textarea name="" id="" placeholder="image URL"></textarea>
          <button type="submit">Añadir</button>
        </section>
      </form>
    </div>
  );
};

export default FormPage;
