//Server instantiate
const express = require('express');
const app = express();
const port = 3000;

//Used to parse req.body in express -> PUT or POST
const bodyParser = require('body-parser');

//Speciafically parse JSON data and add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(port, () => {
    console.log(`Server started at port number ${port}`);
});


//Routes
app.get('/', (req, res) => {
    res.send("hello, This is the home page");
})

app.post('/api/cars', (request, response) => {
    const { name, brand } = request.body;
    console.log(name);
    console.log(brand);
    response.send(`Car name is ${name} and brand is ${brand}`);
})

// Connect with mongodb using mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true, 
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection Successful")})
.catch((error)=>{console.log("Received an error")})