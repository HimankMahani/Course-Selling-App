const mongoose = require('mongoose')
const UserSchema = mongoose.Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
})

const AdminSchema = mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
})

const CourseSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageURL: String,
    creatorID: mongoose.Schema.Types.ObjectId
})

const purchaseSchema = mongoose.Schema({
    userID: mongoose.Schema.Types.ObjectId,
    courseID: mongoose.Schema.Types.ObjectId
})

const userModel = mongoose.model('User', UserSchema)
const adminModel = mongoose.model('Admin', AdminSchema)
const courseModel = mongoose.model('Course', CourseSchema)
const purchaseModel = mongoose.model('Purchase', purchaseSchema)

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}