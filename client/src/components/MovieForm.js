import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function MovieForm() {
  const [movie, setMovie] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [tags, setTags] = useState("");
  const [star, setStar] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const tag=tags.split(" ");
    const stars=star.split(",");
    const movieData = { movie, rating, description, url, tag, stars };

    axios
      .post("http://localhost:8000/movies", movieData)
      .then((res) => {
        console.log(res)
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="movie_form">
      <h3>Add New Movie</h3>

      <div className="movie_form_card">
        <form action="" onSubmit={handleSubmit}>
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
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
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
        <button onClick={handleSubmit} type="movie_form_submit">Add Movie</button>

        </div>
      </div>
    </div>
  );
}

export default MovieForm;
