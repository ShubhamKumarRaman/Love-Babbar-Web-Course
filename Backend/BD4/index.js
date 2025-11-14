const express = require('express')
const app = express();

require('dotenv').config()

const PORT = process.env.PORT || 8080;

//middleware
app.use(express.json());

const blogRoutes = require('./routes/blog')

//mount
app.use('/api/v1', blogRoutes)

const connectDB = require('./config/database')
connectDB();

//start the server
app.listen(PORT, () => {
    console.log(`App is stated at port no ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("<h1>This is my Homepage. </h1>")
})