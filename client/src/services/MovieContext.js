import React from "react";
import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { setItem } from "./cacheService";

//kreiranje contexta
const MovieContext = createContext();
//localstorage favorites
const savedLocalStorage = JSON.parse(localStorage.getItem("favorites") || "[]");

export function MovieProvider({ children }) {
  const FAVORITES_MOVIES_CACHE_STORAGE_KEY = "favorites";

  const url = "http://localhost:8000/movies";
  const [favorites, setFavorites] = useState(savedLocalStorage);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");



  //localstorage favorites
  useEffect(() => {
    setItem(FAVORITES_MOVIES_CACHE_STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  //Fetch from api
  let getMovies = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleFavorites=(item)=>{
    if (!favorites.some((favorites) => favorites.id === item.id)) {
      setFavorites((favorites) => [...favorites, item]);

    }else{
      setFavorites((favorites) =>
      favorites.filter((favorites) => favorites.id !== item.id)
    );
    }
  }


  


  

  const handleSearch = (e) => {
    if (!e) return;
    e.preventDefault();
    setSearch(e.target.value);
  };
  const searchmovies = movies.filter((item) => {
    return item.movie.toLowerCase().includes(search.toLowerCase());
  });

  

console.log(movies)



  return (
    <MovieContext.Provider
      value={{
        loading,
        setLoading,
        movies,
        setMovies,
        favorites,
        setFavorites,
        
        
        
        handleSearch,
        searchmovies,
        getMovies,
        handleFavorites
        
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

//export contexta
export default MovieContext;
