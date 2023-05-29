import "./style/Movie.css";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import {MovieProvider} from './services/MovieContext';
import MovieById from "./components/MovieById";
import MovieForm from "./components/MovieForm";
import NoPage from "./components/NoPage";
import Hero from "./components/Hero";


function App() {
  return (
    <BrowserRouter>
    <MovieProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/movies" element={<Movie />} className="movies" />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:movieID" element={<MovieById />} />
        <Route path="/movie/create" element={<MovieForm />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
