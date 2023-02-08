import "./App.css";
import Navbar from "./components/nav/navbar";
import Catalogue from "./components/catalogue/catalogue";
import Movies from "./Pages/Movies/Movies";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import Error from "./Pages/404/error";
import Favorites from "./Pages/Favorites/favorites";
import Mobile from "./components/Mobile/Mobile";
import FormPage from "./Pages/FormPage/FormPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id/" element={<MovieDetails />} />
        <Route path="favorites/movie/:id/" element={<MovieDetails />} />
        <Route path="/*" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/newmovie" element={<FormPage />} />
      </Routes>
      <Mobile />
    </div>
  );
}

export default App;
