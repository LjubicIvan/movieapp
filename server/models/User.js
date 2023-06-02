const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    username:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    role_name:{type:String,default:"role_user"}
})


const UserModel=mongoose.model("User",UserSchema)

module.exports=UserModel;