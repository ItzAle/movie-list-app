// import React, { useEffect, useState } from "react";
// import { CiStar } from "react-icons/ci";
// import style from "./Movies.module.css";

// function Movies({ deleteById, style, Link, CiTrash, pelis }) {
//   const [isFav, setIsFav] = useState([]);

//   const addToFavorite = (peli) => {
//     if (!isFav.includes(id)) setIsFav(isFav.concat(id));
//     console.log(id);
//   };

//   const removeFavorite = (id) => {
//     let pelis = isFav.indexOf(id);
//     console.log(pelis);
//     let temp = [...isFav.slice(0, pelis), ...isFav.slice(pelis + 1)];
//     setIsFav(temp);
//   };

//   return (
//     <div className={style.img}>
//       {pelis.map((peli) => (
//         <div className={style.button_card}>
//           <Link to={`movie/${peli.id}`}>
//             <img className={style.imgContent} src={peli.movieURL} alt="img" />
//           </Link>
//           <CiTrash
//             className={style.delete}
//             onClick={() => deleteById(peli.id)}
//           />
//           <CiStar onClick={() => addToFavorite(pelis.isFav)} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Movies;
