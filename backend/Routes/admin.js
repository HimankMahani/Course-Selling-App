const {Router} = require('express')
const adminRouter = Router()
const {adminModel, courseModel} = require('../db')
const {adminMiddleware} = require('../middleware/admin')


const jwt = require('jsonwebtoken')
const {JWT_ADMIN_PASSWORD} = require('../config')


adminRouter.post('/signup', async (req, res) => {
    const {email, password, firstName, lastName} = req.body

    await adminModel.create({
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName
    })

    res.json({
        message: "Signup successful"
    })
})

adminRouter.post('/signin', async (req,res) => {
    const {email, password} = req.body

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if(admin){
        const token = jwt.sign({
            id:admin._id
        }, JWT_ADMIN_PASSWORD)
        res.json({
            message: "Signin completed",
            token: token
        })
    } else {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }
})

adminRouter.post('/course', adminMiddleware, async(req,res) => {
    const creatorId= req.userId
    const {title, description, price, imageUrl} = req.body

    const course = await courseModel.create({
        title,
        description,
        price,
        imageUrl,
        creatorId
    })

    res.json({
        message: "Created new course",
        courseId : course._id
    })
})

adminRouter.put('/course', adminMiddleware, async(req,res) => {
    const creatorId= req.userId
    const {title, description, price, imageUrl, courseId} = req.body

    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: creatorId
    },{
        title,
        description,
        price,
        imageUrl
    })

    res.json({
        message: "Created Edited",
        courseId : course._id
    })
})

adminRouter.get('/course/bulk', async(req,res) => {
    const creatorId= req.userId
    const courses = await courseModel.find({
        _id: creatorId,
    })

    res.json({
        message: "All courses",
        courses
    })
})

module.exports = {
    adminRouter : adminRouter
}