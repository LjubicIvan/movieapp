const express = require("express");
const app = express();
const mongoose=require("mongoose");
const cookieParser = require('cookie-parser');


const jwt=require('jsonwebtoken');
const secret="randomsdfajsdnfaasdfa12312sdas1231";



const User=require("./models/User")
const Movie=require("./models/Movie")

const bcrypt = require('bcrypt');
const salt = 10;

app.use(cookieParser());
app.use(express.json());
PORT=8000;




//Connect
mongoose.connect("mongodb+srv://ljubicivan:ljubicivan@cluster0.m9yue3i.mongodb.net/");



const data = [
  {
    id: 1,
    movie: "The Shawshank Redemption",
    rating: 9.2,
    image: "./images/movie.jpg",
    imdb_url: "https://www.imdb.com/title/tt0111161/",
    year: 2017,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 2,
    movie: "The Godfather",
    rating: 9.2,
    image: "images/godfather.jpg",
    year: 2013,
    imdb_url: "https://www.imdb.com/title/tt0068646/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 3,
    movie: "The Dark Knight",
    rating: 9,
    image: "images/dark_knight.jpg",
    year: 2011,

    imdb_url: "https://www.imdb.com/title/tt0468569/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["thriller", "adventure"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 4,
    movie: "Pulp Fiction",
    year: 2009,

    rating: 8.9,
    image: "images/pulp_fiction.jpg",
    imdb_url: "https://www.imdb.com/title/tt0110912/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["action", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 5,
    year: 2017,

    movie: "The Lord of the Rings: The Return of the King",
    rating: 9,
    image: "images/lotr_return_king.jpg",
    imdb_url: "https://www.imdb.com/title/tt0167260/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 6,
    year: 2020,

    movie: "The Good, the Bad and the Ugly",
    rating: 8.8,
    image: "images/good_bad_ugly.jpg",
    imdb_url: "https://www.imdb.com/title/tt0060196/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["horror"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 7,
    year: 2006,
    movie: "Fight Club",
    rating: 8.8,
    image: "images/fight_club.jpg",
    imdb_url: "https://www.imdb.com/title/tt0137523/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 8,
    year: 2019,
    movie: "The Lord of the Rings: The Fellowship of the Ring",
    rating: 8.8,
    image: "images/lotr_fellowship.jpg",
    imdb_url: "https://www.imdb.com/title/tt0120737/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["action", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 9,
    year: 2019,
    movie: "Forrest Gump",

    rating: 8.8,
    image: "images/forrest_gump.jpg",
    imdb_url: "https://www.imdb.com/title/tt0109830/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 10,
    year: 2019,
    movie: "Inception",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 11,
    year: 2011,
    movie: "Movie Test",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 12,
    year: 2019,
    movie: "Movie Test2",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 13,
    year: 2020,
    movie: "Movie Test3",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 14,
    year: 2021,
    movie: "Movie Test4",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 15,
    year: 2022,
    movie: "Movie Test 5",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action", "thriller", "horror"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 16,
    year: 2017,

    movie: "Movie Test 6",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
  {
    id: 17,
    year: 2017,

    movie: "Movie Test 7",
    rating: 8.8,
    image: "images/inception.jpg",
    imdb_url: "https://www.imdb.com/title/tt1375666/",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam officiis obcaecati numquam sed sapiente aperiam nesciunt reprehenderit, accusamus sit quam cum. Facere consequatur mollitia odit vel neque ipsum nihil architecto exercitationem totam. Molestiae deleniti perspiciatis quisquam magnam itaque ex nobis minus dolorem, aut mollitia reprehenderit molestias omnis sed ipsum sit!",
    tag: ["comedy", "action", "thriller"],
    stars: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
  },
];






//register
app.post("/register", async(req, res) => {
  const {firstName,lastName,username,password}=req.body;

  try{
    const UserDoc= await User.create({firstName,lastName,username,password:bcrypt.hashSync(password,salt)});
    res.json(UserDoc);
  }catch(e) {
      res.status(400).json(e);
  }
});


//login 
app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc=await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);


  if (passOk) {
  
    jwt.sign({username,role:userDoc.role_name}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
       role:userDoc.role_name,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});


//logout
app.post('/logout',(req,res)=>{
  res.clearCookie('token','').json('ok');
})













//Get ALL movies MongoDB
app.get('/movies', async (req,res) => {
  res.json(
    await Movie.find()
  );
});

//MongoDb POST movie
app.post("/movies",async (req,res)=>{

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    try{
      const { movie, rating, description, imdb_url,year, tag, stars } = req.body;
    const MovieDoc = await Movie.create({
      movie,
      rating,
      description,
      imdb_url,
      year,
      tag,
      stars
    });
    res.json(MovieDoc);

    }catch(e){      res.status(400).json(e);
    }
  });
})


//GET MOVIE BY ID MONGODB
app.get('/movie/:id', async (req, res) => {
  const {id} = req.params;
  const MovieDoc = await Movie.findById(id);
  res.json(MovieDoc);
})

//DELETE by id Mongodb 
app.delete('/movie/:id',async(req,res)=>{
  const {id}=req.params;
  const MovieDoc = await Movie.findByIdAndDelete(id);
  res.json(MovieDoc)
})

//update by id
app.put('/movie/edit/:id',async(req,res)=>{
  const {id}=req.params;
  const {token} = req.cookies;

  jwt.verify(token, secret, {}, async (err,info) => {
    try{
      const { movie, rating, description, imdb_url,year,tag,stars } = req.body;

      const movieDoc=await Movie.findById(id)
      await movieDoc.updateOne({
        movie,
        rating,
        description,
        imdb_url,
        year,
        tag,
        stars
      })
    res.json(movieDoc);

    }catch(e){   
       res.status(400).json(e);
    }
  });

})









app.listen(PORT, () => {
  console.log("listening on port 8000");
});
