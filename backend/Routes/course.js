const {Router} = require('express');
const { userMiddleware } = require('../middleware/user');
const { purchaseModel, courseModel } = require('../db');
const courseRouter = Router();

courseRouter.post('/purchase', userMiddleware, async(req,res) =>{
    const userId = req.userId
    const courseID = req.body.courseID

    await purchaseModel.create({
        userID: userId,
        courseID: courseID
    })
    res.json({
        message: "Course purchased"
    })
})

courseRouter.get('/preview', async(req,res) => {
    const courses = await courseModel.find({})
    res.json({
        message: "All courses",
        courses
    })
})

module.exports = {
    courseRouter: courseRouter
}