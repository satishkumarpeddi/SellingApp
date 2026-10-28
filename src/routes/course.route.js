const express = require('express');

const courseRouter = express.Router();

courseRouter.post('/course/purchase',(req,res)=>{

});

courseRouter.get('/course/preview',(req,res)=>{

});


module.exports = {
    courseRouter:courseRouter
}