const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },password:{
        type:String,
        required:true
    },role:{
        type:String,
        required:true
    },city:{
        type:String,
        required: true
    },phonenumber:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        required:true
    }
}
,{timestamps:true});
const user=mongoose.model("user",userSchema)
module.exports=user
