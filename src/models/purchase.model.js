const mongoose = require('mongoose')
const {courseModel} = require('./course.model')
const {userId} = require('./users.model')
require('dotenv').config(
    {path:path.resolve(__dirname,'../../.env')}
)

const MONGODB_URL = process.env.MONGODB_URL;
mongoose.connect(MONGODB_URL).then(()=> console.log("Mongodb connected")).catch((error)=> console.log(`${error}`))

const Schema = mongoose.Schema;

const Purchases = new Schema({
    courseId:mongoose.Types.ObjectId,
    userId:mongoose.Types.ObjectId

})

const PurchaseModel = mongoose.model('purchase',Purchases);

module.exports = {
    PurchaseModel:PurchaseModel
}