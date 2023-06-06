import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import MovieContext from "../services/MovieContext";
import { useContext } from "react";
import "../style/Movie.css";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import {useState,useEffect} from "react";
import Footer from "./Footer"
import UserContext from "../services/UserContext";


function MovieById() {

  const {handleFavorites } = useContext(MovieContext);
  const { user } = useContext(UserContext);
  const [movie,setMovie]=useState(null);
  const navigate = useNavigate();
  const { movieID } = useParams();



const handleDelete=()=>{
  axios.delete(`http://localhost:8000/movie/${movieID}`)
  .then((res)=>{
    console.log(res.data)
    navigate("/")
  })
  .catch((err)=>{
    console.log(err)
  })
}
  




  let getMovieID = () => {
    axios
      .get(`http://localhost:8000/movie/${movieID}`)
      .then((res) => {
        setMovie(res.data)
        console.log(res.data.tag)

      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getMovieID();
  }, []);


  let tags = null;
  let stars = null;
 
  if (movie) {
    tags = movie.tag.map((item) => {
      return <h3 key={item.id}>{item}</h3>;
    });
    stars = movie.stars.map((item) => {
      return <h3 key={item.id}>{item}</h3>;
    });
  }

  



  

  return (
    <div>
    <div>
      {movie ? (
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

           {movie ?  <div className="movie_id_tags">{tags}</div> : null}
           {movie ?  <div className="movie_id_stars">{stars}</div> : null}


           
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

             {user && user.role==="role_admin" ? <button className="movie_id_delete" onClick={handleDelete}>
             Delete Movie
           </button> : null} 
             {user && user.role==="role_admin" ? <button className="movie_id_delete">
             <Link className="edit_link" to={`/movie/edit/${movieID}`}>Edit Movie</Link>
           </button> : null} 
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
    </div>
  );
}

export default MovieById;
