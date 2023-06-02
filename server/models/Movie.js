const mongoose=require("mongoose");

const MovieSchema=new mongoose.Schema({
    
    movie:{type:String,required:true},
    rating:{type:Number,required:true},
    year:{type:Number,required:true},
    imdb_url:{type:String,required:true},
    description:{type:String,required:true},
    tag:{type:[String],required:true},
    stars:{type:[String],required:true},

})


const MovieModel=mongoose.model("Movie",MovieSchema)

module.exports=MovieModel;