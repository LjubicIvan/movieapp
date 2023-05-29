import "../style/Movie.css";
import MovieContext from "../services/MovieContext";
import { useContext } from "react";
import MovieLoader from "./MovieLoader";
import Pagination from "./Pagination";
import Footer from "./Footer";
import MovieCard from "./MovieCard";


export default function Movie() {
  const {
    
    loading,
  } = useContext(MovieContext);

  
  return (
    <div>
      {loading ? (
        <div>
          <MovieLoader />
        </div>
      ) : (
        <div>
        <Pagination />
        <Footer/>
       
        </div>
      )}

      
    </div>

    
  );
}
