import React from "react";
import MovieContext from "../services/MovieContext";
import { useContext, useState } from "react";
import "../style/Movie.css";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";
import MovieCard from "./MovieCard";

const Pagination = () => {
  const {
    movies,
    searchmovies,
    favorites
    
  } = useContext(MovieContext);


  const [pageNumber, setPageNumber] = useState(1);
  const postLimit = 6;
  const lastIndex = pageNumber * postLimit;
  const firstIndex = lastIndex - postLimit;

  const numberOfPages = Math.ceil(movies.length / postLimit);

  const nextPage = () => {
    if (pageNumber < numberOfPages) {
      setPageNumber(pageNumber + 1);
    }
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  const start = () => {
    setPageNumber(1);
  };
  const end = () => {
    setPageNumber(numberOfPages);
  };

  const displayPagination = searchmovies
  .slice(firstIndex, lastIndex)
  .map((item) => {
    const isFav = favorites.some((movieFav=>movieFav._id===item._id
    ))
    return(
      <MovieCard isFav={isFav} item={item} key={item.id}/>
    )
  });

  return (
    <div>
      <div className="movies">{displayPagination}</div>

      <div className="pagination-page">
        <button onClick={start} className="pagination-button">
          <BiChevronsLeft />
        </button>
        <button onClick={prevPage} className="pagination-button">
          <BiChevronLeft />
        </button>
        <h1>{pageNumber}</h1>
        <button onClick={nextPage} className="pagination-button">
          <BiChevronRight />
        </button>
        <button onClick={end} className="pagination-button">
          <BiChevronsRight />{" "}
        </button>
      </div>

      
    </div>
  );
};

export default Pagination;
