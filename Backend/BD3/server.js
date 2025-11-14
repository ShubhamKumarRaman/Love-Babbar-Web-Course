// const express = require("express")
// const app = express()

// app.listen(3000,()=>{
//     console.log("App is running successfully")
// })

const express = require("express")
const app = express()

//Load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//middleware to parse json request body
app.use(express.json())


//import routes for Todo API
const todoRoutes = require('./routes/todo')

// mount the todo api routes
app.use('/app/v1', todoRoutes)

//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

// connect the database
const dbConnect = require('./config/database')
dbConnect();

//default route
app.get('/', (req, res) => {
    res.send(`<h1>This is Homepage body<h1>`)
})