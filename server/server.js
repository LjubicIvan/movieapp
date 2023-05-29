const express = require("express");
const app = express();
const bodyParser =require("body-parser");

app.use(bodyParser.json());

const data = [
  {
  "id": 1,
  "movie": "The Shawshank Redemption",
  "rating": 9.2,
  "image": "./images/movie.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0111161/",
  "year":2017,
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 2,
  "movie": "The Godfather",
  "rating": 9.2,
  "image": "images/godfather.jpg",
  "year":2013,
  "imdb_url": "https://www.imdb.com/title/tt0068646/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 3,
  "movie": "The Dark Knight",
  "rating": 9,
  "image": "images/dark_knight.jpg",
  "year":2011,

  "imdb_url": "https://www.imdb.com/title/tt0468569/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  
  "thriller",
  "adventure"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 4,
  "movie": "Pulp Fiction",
  "year":2009,

  "rating": 8.9,
  "image": "images/pulp_fiction.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0110912/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  
  "action",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 5,
  "year":2017,

  "movie": "The Lord of the Rings: The Return of the King",
  "rating": 9,
  "image": "images/lotr_return_king.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0167260/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 6,
  "year":2020,

  "movie": "The Good, the Bad and the Ugly",
  "rating": 8.8,
  "image": "images/good_bad_ugly.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0060196/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "horror"
  
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 7,
  "year":2006,
  "movie": "Fight Club",
  "rating": 8.8,
  "image": "images/fight_club.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0137523/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 8,
  "year":2019,
  "movie": "The Lord of the Rings: The Fellowship of the Ring",
  "rating": 8.8,
  "image": "images/lotr_fellowship.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0120737/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  
  "action",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 9,
  "year":2019,
  "movie": "Forrest Gump",

  "rating": 8.8,
  "image": "images/forrest_gump.jpg",
  "imdb_url": "https://www.imdb.com/title/tt0109830/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 10,
  "year":2019,
  "movie": "Inception",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 11,
  "year":2011,
  "movie": "Movie Test",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 12,
  "year":2019,
  "movie": "Movie Test2",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 13,
  "year":2020,
  "movie": "Movie Test3",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 14,
  "year":2021,
  "movie": "Movie Test4",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 15,
  "year":2022,
  "movie": "Movie Test 5",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  "thriller",
  "horror"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 16,
  "year":2017,

  "movie": "Movie Test 6",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  },
  {
  "id": 17,
  "year":2017,

  "movie": "Movie Test 7",
  "rating": 8.8,
  "image": "images/inception.jpg",
  "imdb_url": "https://www.imdb.com/title/tt1375666/",
  "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
  "tag": [
  "comedy",
  "action",
  "thriller"
  ],
  "stars": [
  "Tim Robbins",
  "Morgan Freeman",
  "Bob Gunton"
  ]
  }
  
  ]

app.use(express.json())



//Get all movies
app.get("/movies", (req, res) => {
  res.json(data);
});

//Post movie
app.post("/movies",(req,res)=>{
  const { movie, rating, description, url, tag, stars }=req.body;

  data.push({
    id:(data.length+1),
    movie:movie,
    rating:rating,
    description:description,
    url:url,
    tag:tag,
    stars:stars
    });

    res.json(data);
  })



//Get Movie by ID
// app.get("http://localhost:8000/movie/:id", (req, res) => {
  
//   const id=req.params.id;
//   const movieID = data.find(item => item.id === parseInt(id));
//   if (movieID) {
//     res.json(movieID);
//   }else{
//     res.status(404).json({message:"Movie not found"});
//   }
// });







//Delete movie
// app.delete(`http://localhost:3000/movie/:id`,(req,res)=>{
//   const id = req.body.id*1;
//   data = data.filter((item) => item.id !== id);
//   res.json(data);
// })






app.listen(8000, () => {
  console.log("listen on port 8000");
});
