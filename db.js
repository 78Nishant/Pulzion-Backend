const { kMaxLength } = require("buffer");
const mongoose = require("mongoose");

mongoose.connect("");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        minLength: 3,
        maxLength: 30,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password:{
        
    }
})