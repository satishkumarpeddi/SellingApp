const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Courses = new Schema({
    title:String,
    description:String,
    price:number,
    imageUrl:String,
    createId:ObjectId
})

const CourseModel = mongoose.Model('courses',Courses);


module.exports = {
    CourseMode:CourseModel
}