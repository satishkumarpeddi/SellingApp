const express = require('express');

const userRouter = express.Router();

userRouter.post('/signup',(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})

userRouter.post('/signin',(req,res)=>{
    res.json({
        message:"signin endpoint"
    })
})

userRouter.get('/purchases',(req,res)=>{
    res.json({
        message:"purchase endpoint"
    })
})

userRouter.get('/courses',(req,res)=>{
    res.json({
        message:"courses endpoint"
    })
})

module.exports = {
    userRouter:userRouter
}