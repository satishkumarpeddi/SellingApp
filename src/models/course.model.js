const mongoose = require('mongoose');
require('dotenv').config(
    {path:path.resolve(__dirname,'../../.env')}
)

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL).then(()=> console.log("Mongodb connected")).catch((error)=> console.log(`${error}`))

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