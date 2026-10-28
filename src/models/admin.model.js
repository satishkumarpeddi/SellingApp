const mongoose = require('mongoose')
require('dotenv').config(
    {path:path.resolve(__dirname,'../../.env')}
)

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL).then(()=> console.log("Mongodb connected")).catch((error)=> console.log(`${error}`))

const Schema = mongoose.Schema;

const Admin = new Schema({
    email:{type:String,unqiue:true},
    password:String,
    firstName:String,
    lastName:String
})

const AdminModel = mongoose.model('admin',Admin);

module.exports = {AdminModel:AdminModel}