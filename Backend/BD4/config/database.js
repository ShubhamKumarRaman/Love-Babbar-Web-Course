const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true, 
        useUnifiedTopology:true
    })
    .then(console.log("DB Connected Successfully"))
    .catch((err)=>{
        console.log("DB connection failed")
        console.error(err);
        process.exit(1);
    })
};

module.exports = connectDB;