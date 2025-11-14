const express = require('express')
const app = express()

require('dotenv').config();
const port = process.env.PORT||8080;

app.use(express.json());

const blogRoutes = require('./routes/blog')

app.use('/app/v1', blogRoutes);

app.listen(port,()=>{
    console.log(`Server started successfully at port: ${port}`)
})

