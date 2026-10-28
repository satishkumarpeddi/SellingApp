const mongoose = require('mongoose')


const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;


const Users = new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const UserModel = mongoose.model('users',Users);

model.exports = {UserModel:UserModel}