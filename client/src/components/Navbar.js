import React from 'react'
import "../style/Movie.css";
import {Link} from "react-router-dom"
import MovieContext from '../services/MovieContext'
import {useContext} from "react";

function Navbar() {

  const {favorites,handleSearch}=useContext(MovieContext);


  return (
    
    <div className='navbar'>
        <Link to="/" className='navbar_logo'><h1>MovieApp</h1></Link>
        

        <div className="navbar_search">
            <input
              type="text"
              placeholder="Search Movie..."
              className="search-bar"
              onChange={handleSearch}
            />
          </div>

        <ul className='navbar_links'>    
        <li> <Link to="/movies" className="navbar_link"><h3>All Movies</h3></Link></li>
        <li> <Link to="/favorites" className="navbar_link"><h3>Watchlist ({favorites.length})</h3></Link></li>
        <li> <Link to="/movie/create" className="navbar_link"><h3>Create New Movie</h3></Link></li>
        </ul>  
    </div>
    
  )
}

export default Navbar