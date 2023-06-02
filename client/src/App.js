import "./style/Movie.css";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import { MovieProvider } from "./services/MovieContext";
import { UserProvider } from "./services/UserContext";
import MovieById from "./components/MovieById";
import MovieForm from "./components/MovieForm";
import NoPage from "./components/NoPage";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";

import AdminRoute from "./services/AdminRoute";
import NotAuth from "./components/NotAuth";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/movies" element={<Movie />} className="movies" />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:movieID" element={<MovieById />} />

            <Route element={<AdminRoute />}>
              <Route path="/movie/create" element={<MovieForm />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/notauth" element={<NotAuth />} />
          </Routes>
        </UserProvider>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
