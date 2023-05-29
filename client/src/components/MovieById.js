import React from "react";
import { Navigate, useParams } from "react-router-dom";
import MovieContext from "../services/MovieContext";
import { useContext } from "react";
import "../style/Movie.css";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import Footer from "./Footer";

function MovieById() {
  const { movies, loading, handleFavorites } = useContext(MovieContext);
  const { movieID } = useParams();
  const navigate=useNavigate()

  let movie = {};
  let tags = null;
  let stars = null;

  if (Array.isArray(movies) && movies.length > 0) {
    movie = movies.find((item) => item.id === movieID * 1);

    tags = movie.tag.map((item) => {
      return <h3 key={item.id}>{item}</h3>;
    });

    stars = movie.stars.map((item) => {
      return <h3 key={item.id}>{item}</h3>;
    });
  }

  

  return (
    <div>
      {!loading && movie ? (
        <div className="movie_id_all">
        <div className="movie_id">
          <div className="movie_id_thumbnail">
            <img src={require("../images/movie.jpg")} alt="" />
          </div>

          <div className="movie_id_right">
            <h1 className="movie_id_title">{movie.movie}</h1>
            <h3 className="movie_id_rating">
              Rating : {movie.rating} <span>&#9733;</span>{" "}
            </h3>

            <div className="movie_id_tags">{tags}</div>

            <div className="movie_id_stars">{stars}</div>

            <p className="movie_id_description">{movie.description}</p>

            <div className="movie_id_buttons">
              <AiOutlineHeart
                className="movie_id_fav_heart"
                onClick={() => {
                  handleFavorites(movie);
                }}
              />
              <button className="movie_id_imdb">
                <a href={movie.imdb_url}>ImDB</a>
              </button>

              <button className="movie_id_delete">
                Delete Movie
              </button>
            </div>
          </div>
          
        </div>
        <div className="movie_id_player">
        <iframe className="video" width="1150" height="647" src="https://www.youtube.com/embed/xi-1NchUqMA" title="Knives Out Trailer #1 (2019) | Movieclips Trailers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <Footer/>
        </div>
      ) : (
        <p>Loading Data</p>
      )}
    </div>
  );
}

export default MovieById;
