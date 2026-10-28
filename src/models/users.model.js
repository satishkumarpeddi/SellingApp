const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config(
    {path:path.resolve(__dirname,'../../.env')}
)

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL).then(()=> console.log("Mongodb connected")).catch((error)=> console.log(`${error}`))
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