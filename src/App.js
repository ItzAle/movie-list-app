import "./App.css";
import Navbar from "./components/nav/navbar";
import Catalogue from "./components/catalogue/catalogue";
import Movies from "./Pages/Movies/Movies";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import Error from "./Pages/404/error";
import Favorites from "./Pages/Favorites/favorites";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id/" element={<MovieDetails />} />
        <Route path="/*" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
