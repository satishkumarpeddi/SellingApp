const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Admin = new Schema({
    email:{type:String,unqiue:true},
    password:String,
    firstName:String,
    lastName:String
})

const AdminModel = mongoose.model('admin',Admin);

module.exports = {AdminModel:AdminModel}