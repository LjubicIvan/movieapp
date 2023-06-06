import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import MovieContext from "../services/MovieContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ item,isFav }) {
  const { handleFavorites } =
    useContext(MovieContext);

  return (
    <div key={item.id} className="movie_card">
      <div className="movie_card_thumbnail">
        <img src={require("../images/movie.jpg")} alt="" />
      </div>
      <div className="movie_card_content">
        <Link className="Link" to={`/movie/${item._id}`}>
          <h3 className="movie_card_title">{item.movie} </h3>
        </Link>

        

        <h6 className="movie_card_rating">
          Rating : {item.rating} <span>&#9733;</span> 
        </h6>
       

        <p className="movie_card_imdb">
          Find More About on <a href={item.imdb_url}>ImDB</a>
        </p>

        <div className="movie_card_fav_heart">
        {!isFav ? <AiOutlineHeart
          className="fav-heart"
          onClick={() => {
            handleFavorites(item);
          }}
        /> : <AiFillHeart
        className="fav-heart"
        onClick={() => {
          handleFavorites(item);
        }}
      />}
          
        </div>
      </div>
    </div>
  );
}
