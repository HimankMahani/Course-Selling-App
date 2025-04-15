const {Router}  = require('express')
const userRouter = Router()
const {userModel, purchaseModel, courseModel} = require('../db')
const {userMiddleware} = require('../middleware/user')

const jwt = require('jsonwebtoken')
const {JWT_USER_PASSWORD} = require('../config')


userRouter.post('/signup', async (req,res) => {
    const {email, password, firstName, lastName} = req.body

    await userModel.create({
        email : email,
        password : password,
        firstName : firstName,
        lastName : lastName
    })

    res.json({
        message: "Signup successful"
    })
})

userRouter.post('/signin', async (req,res) => {
    const {email, password} = req.body

    const user = await userModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id:user._id
        }, JWT_USER_PASSWORD)
        res.json({
            message: "Signin completed",
            token
        })
    } else {
        res.status(403).json({
            message: "incorrect credentials"
        })
    }

    
})

userRouter.get('/purchases', userMiddleware, async(req,res) => {
    const userId = req.userId
    const purchases = await purchaseModel.find({
        userID:userId
    })

    const courseData = await courseModel.find({
        _id: {$in:purchases.map(x=>x.courseID)}
    })

    res.json({
        message: "users courses",
        purchases: purchases,
        courseData: courseData
    })
})

module.exports = {
    userRouter: userRouter
}