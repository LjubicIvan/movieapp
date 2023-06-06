import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditMovie() {
  const { movieID } = useParams();

  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [imdb_url, setImdb_Url] = useState("");
  const [year, setYear] = useState("");
  const [tags, setTags] = useState([]);
  const [star, setStar] = useState([]);

  const navigate = useNavigate();

  let getMovieID = () => {
    axios
      .get(`http://localhost:8000/movie/${movieID}`)
      .then((res) => {
        setMovie(res.data);
        setMovie(res.data.movie);
        setRating(res.data.rating);
        setDescription(res.data.description);
        setImdb_Url(res.data.imdb_url);
        setYear(res.data.year);
        setTags(res.data.tag);
        setStar(res.data.stars);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getMovieID();
  }, []);




  


  const handleEdit = (e) => {
    e.preventDefault();
    const tag=tags?.toString().split(" ");
    const stars=star?.toString().split(",");
    const movieData = { movie, rating, description, imdb_url, tag,year, stars };

    axios
      .put(`http://localhost:8000/movie/edit/${movieID}`, movieData)
      .then((res) => {
        console.log(res)
        navigate(-1)
      })
      .catch((err) => {
        console.log(err);
      });
  };








  return (
    <div className="movie_form">
      <h3>Edit Movie</h3>

      <div className="movie_form_card">
        <form action="" onSubmit={handleEdit}>
          <input
            type="text"
            required
            name="movie"
            id=""
            placeholder="Name of Movie..."
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
          />
          <input
            type="number"
            required
            name="movie"
            id=""
            placeholder="Rating of Movie..."
            onChange={(e) => {
              setRating(e.target.value);
            }}
            value={rating}
            min="1"
            max="10"
          />
          <input
            type="number"
            required
            name="movie"
            id=""
            placeholder="Year of Movie..."
            onChange={(e) => {
              setYear(e.target.value);
            }}
            value={year}
          />
          <textarea
            type="text"
            required
            rows={5}
            name="movie"
            className="movie_form_textarea"
            id=""
            placeholder="Description of Movie..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
          <input
            type="text"
            required
            name="movie"
            id=""
            placeholder="ImDB URL..."
            value={imdb_url}
            onChange={(e) => {
              setImdb_Url(e.target.value);
            }}
          />
          <input
            type="text"
            required
            name="movie"
            id=""
            placeholder="Tags..."
            value={tags}
            onChange={(e) => {
              setTags(e.target.value);
            }}
          />
          <input
            type="text"
            required
            name="movie"
            id=""
            placeholder="Actors ( , separator )"
            value={star}
            onChange={(e) => {
              setStar(e.target.value);
            }}
          />
        </form>
        <div className="movie_form_button_container">
          <button onClick={handleEdit} type="movie_form_submit">
            Update Movie
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditMovie;
