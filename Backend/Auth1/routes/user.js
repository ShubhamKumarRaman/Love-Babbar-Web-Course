const express = require('express');
const router = express.Router();

const User = require("../models/User")

const { login, signup } = require('../Controllers/Auth')
const { auth, isStudent, isAdmin } = require("../middlewares/auth")


router.post('/login', login);
router.post('/signup', signup);


//Testing Route
router.get('/test', auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the protected route for Test"
    })
})


// Protected Route
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the protected route for Student"
    })
})

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the protected route for Admin"
    })
})


// To fetch user's details
router.get('/getEmail', auth, async (req, res) => {
    try {
        const id = req.user.id;
        console.log("ID: ", id);
        const user = await User.findById(id);

        res.status(200).json({
            success: true,
            user: user,
            message: 'Welcome to the email route'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'Error while fetching ID'
        })
    }
})
module.exports = router;