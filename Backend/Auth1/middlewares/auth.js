const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.auth = (req, res, next) => {
    try {
        //Extract JWT Token
        //Pending : Other ways to fetch token

        console.log("Cookie: ", req.cookies.token);
        console.log("body: ", req.body.token);
        console.log("header: ", req.header("Authorization"))

        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token Missing",
            })
        }

        // verify the token
        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET)
            console.log(payload);
            req.user = payload;
        } catch (err) {
            return res.status(401).json({
                success: false,
                message: "token is invalid"
            })
        }

        next();

    } catch (err) {
        return res.status(401).json({
            message: false,
            message: "Something wents wrong, while verifying the token"
        })
    }
}

exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Student") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for students"
            })
        }
        next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "User Role is not matching. "
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Admin") {
            return res.status(401).json({
                success: false,
                message: "This is a protected route for Admin"
            })
        }
        next();
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "User Role is not working. "
        })
    }
}