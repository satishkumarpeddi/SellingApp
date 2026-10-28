const mongoose = require('mongoose')
const {courseModel} = require('./course.model')
const {userId} = require('./users.model')

const Schema = mongoose.Schema;

const Purchases = new Schema({
    courseId:mongoose.Types.ObjectId,
    userId:mongoose.Types.ObjectId

})

const PurchaseModel = mongoose.model('purchase',Purchases);

module.exports = {
    PurchaseModel:PurchaseModel
}