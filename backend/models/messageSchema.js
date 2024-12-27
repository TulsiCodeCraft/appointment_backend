import mongoose from "mongoose";
import validator from "validator";

const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First name must contain at least 3 characters!"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name must contain at least 3 characters!"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Please enter a provide a valid email!"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Phone Number must contain exact 11 digit"],
        maxLength:[11,"Phone Number must contain exact 11 digit"],
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message must contain at least 10 characters"],
      
    },


});

export const Message=mongoose.model("Message",messageSchema);