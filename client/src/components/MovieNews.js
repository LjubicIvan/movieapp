import React from "react";
import MovieContext from "../services/MovieContext";
import { useContext } from "react";

export default function MovieNews() {
  const { movies } = useContext(MovieContext);


  // function generateRandomNumbers() {
  //   var numbers = [];
  //   for (var i = 0; i < 4; i++) {
  //     var randomNumber = Math.floor((Math.random() * movies.length) +1); 
  //     numbers.push(randomNumber);
  //   }
  //   return numbers;
  // }
  // var randomNumbers = generateRandomNumbers();
  // console.log(randomNumbers);




  const data = [
    {
      id: 1,
      tag: "Action",
      year: 2023,
      title: "Knives Out |||",
    },
    {
      id: 2,
      tag: "Comedy",
      year: 2024,
      title: "The Lord of the Rings: The Two Towers",
    },
    {
      id: 3,
      tag: "Action",
      year: 2023,
      title: "The Marvelous Mrs. Maisel"
    },
    {
      id: 4,
      tag: "Action",
      year: 2023,
      title: "Fast X",
    },
  ];

  
  

  
  const whatToWatch=[...movies.slice(0,4)]
  
  const listOfPicks=whatToWatch.map((item)=>{
    return(
      <div className="movie_news_card" key={item.id}>
        <img
          src={require("../images/movie1.jpg")}
          className="movie_news_card_image"
          alt=""
        />
        <div className="movie_news_card_tags">
          <h2 className="movie_news_card_tag">{item.tag}</h2>
          <h2 className="movie_news_card_year">{item.year}</h2>
        </div>
        <h2 className="movie_news_card_title">
          {item.movie}
        </h2>
      </div>
    )
  })

  const listOfNewMovies = data.map((item) => {
    return (
      <div className="movie_news_card" key={item.id}>
        <img
          src={require("../images/movie1.jpg")}
          className="movie_news_card_image"
          alt=""
        />
        <div className="movie_news_card_tags">
          <h2 className="movie_news_card_tag">{item.tag}</h2>

          <h2 className="movie_news_card_year">{item.year}</h2>
        </div>
        <h2 className="movie_news_card_title">
          {item.title}
        </h2>
      </div>
    );
  });


    

  return (
    <div>


      <div className="movie_news">
        <h1 className="movie_news_title">Upcoming Movies</h1>
        <div className="movie_news_cards">
          {listOfNewMovies}
        </div>
        <hr></hr>
      </div>



      


      <div className="movie_news">
        <h1 className="movie_news_title pick">What to Watch</h1>
        <h2 className="movie_news_title_pick"> Top Picks </h2>

        <div className="movie_news_cards">
        {listOfPicks}
        </div>
        <hr></hr>
      </div>
    </div>
  );
}
