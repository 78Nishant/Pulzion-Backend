// const mongoose = require("mongoose")
// mongoose.connect("mongodb+srv://pulzion:pulzion@pulziondata.ssxoa.mongodb.net/")

const mongoose=require( "mongoose");
const { number } = require("zod");
const {Schema}= mongoose


var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


// const userSchema = mongoose.Schema({
//     username:{
//         type: String,
//         minLength: 3,
//         maxLength:30,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true
//     },
//     password: {
//         type: String,
//         minLength: 6,
//         required: true
//     },
//     firstName: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     lastName:{
//         type: String,
//         trim: true,
//         required: true
//     },
//     parentEmail: {
//         type: String,
//         trim: true,
//         lowercase: true,
//         unique: true,
//         required: 'Email address is required',
//         validate: [validateEmail, 'Please fill a valid email address'],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
//     }
// })

// const userModuleSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
//     moduleId:{

//     }
// });


// const modu

// const Account = mongoose.model('Account', accountSchema);

// const User = mongoose.model('User',userSchema);

// module.exports = {
//     User,
//     Account,
// };

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    maxLength: 30,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  personalEmail: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ]
  },
  password: {
    type: String,
    minLength: 6,
    required: true,
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  parentEmail: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
});

const userProgress = new  mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  progress: {

  },
  modules: {

  },
  streak: {
    type: number,
    default: 1,
  },
  totalDays: {
    type: number,
    required: true,
  }
})
const Progress = mongoose.model('Progress', userProgress)
const User=mongoose.model('User', userSchema);
module.exports={User} ;