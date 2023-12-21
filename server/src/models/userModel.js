import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username:{type:String, required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String, required:true},
    role:{type:String, required:true},
}, { timestamps: true })

export default mongoose.model("User", userModel)