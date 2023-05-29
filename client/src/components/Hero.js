import React from "react";
import MovieNews from "./MovieNews";
import Footer from "./Footer";
import {Link} from "react-router-dom"

export default function Hero() {

  return (
    <div>
      <div className="hero">

      <div className="hero_container">
        <h1 className="hero_h1">Unlimited movies, TV shows, and more</h1>
        <h2 className="hero_h2">Your all-in-one movie hub for endless cinematic adventures!</h2>
        <div className="hero_buttons">
            <button className="hero_button_1"><Link to="/movies" className="Link">See All Movies</Link></button>

        </div>
        </div>
      </div>


      <MovieNews/>
      <Footer/>
    </div>
  );
}
