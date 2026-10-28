const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Courses = new Schema({
    title:String,
    description:String,
    price:number,
    imageUrl:String,
    createId:mongoose.Types.ObjectId
})

const CourseModel = mongoose.Model('courses',Courses);


module.exports = {
    CourseMode:CourseModel
}