const express = require('express');
const router=express.Router();
const authController=require('../controller/user.controller.js')

router
// .post('/login',login)
// .post('/logout',logout)
.post('/signup',authController.signup)
.get('/',authController.check)
module.exports= {router};