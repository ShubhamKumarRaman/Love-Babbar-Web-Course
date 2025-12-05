const mongoose = require('mongoose')

require('dotenv').config()

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser:true, 
        // useUnifiedTopology:true
    })
        .then(() => { console.log("DB Connected Successfully") })
        .catch((err) => {
            console.log("DB Connection Issues");
            console.error(err);
            process.exit(1);
        })
}

// const mongoose = require('mongoose')
// require("dotenv").config();

// const dbConnect = () => {
//     if (!process.env.DATABASE_URL) {
//         console.error('DATABASE_URL is not set. Check .env');
//         process.exit(1);
//     }

//     // return the connect promise so callers can await/then it
//     return mongoose.connect(process.env.DATABASE_URL)
//         .then(() => {
//             console.log("DB Connected Successfully")
//         })
//         .catch((err) => {
//             console.log("DB Connection issues");
//             console.error(err);
//             // rethrow so caller can handle exit
//             throw err;
//         });
// }

// module.exports = dbConnect;