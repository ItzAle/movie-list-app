import "./App.css";
import Navbar from "./components/nav/navbar";
import Catalogue from "./components/catalogue/catalogue";
import Movie1 from "./Pages/movie1/movie1";
import Movies from "./Pages/Movies/Movies";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/id:/" element={<Movie1 />} />
      </Routes>
    </div>
  );
}

export default App;
