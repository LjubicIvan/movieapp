import React from "react";
import MovieContext from "../services/MovieContext";
import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import {Link} from "react-router-dom"

function Favorites() {
  const { favorites,handleFavorites } = useContext(MovieContext);

  const listofsaved = favorites.map((item) => {
    return (
      <div key={item.id} className="movie_card">
      <div className="movie_card_thumbnail">
        <img src={require("../images/movie.jpg")} alt="" />
      </div>
      <div className="movie_card_content">
        <Link className="Link" to={`/movie/${item.id}`}>
          <h3 className="movie_card_title">{item.movie} </h3>
        </Link>

        

        <h6 className="movie_card_rating">
          Rating : {item.rating} <span>&#9733;</span> 
        </h6>
       

        <p className="movie_card_imdb">
          Find More About on <a href={item.imdb_url}>ImDB</a>
        </p>

        <div className="movie_card_fav_heart">
          <AiFillHeart
            className="fav-heart"
            onClick={() => {
              handleFavorites(item);
            }}
          />
        </div>
      </div>
    </div>
    );
  });

  return (
    <div>
    {listofsaved.length>0 ? <div className="movies">{listofsaved}</div>: <h2>There are no Favorite Movies..</h2>}
    </div>
    )
}

export default Favorites;
