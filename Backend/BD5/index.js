const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.listen(port, ()=>{
    console.log("App is listening on port ${port}")
})


app.get('/', (req,res)=>{
    res.send("Hello world")
})

app.post('/',(req,res)=>{
    res.send("Gota POST request")
})

app.put('/user', (req,res)=>{
    res.send("Got a PUT request at /user")
})

app.delete('/user', (req,res)=>{
    res.send("Got a DELETE request at /user")
})


const userRouter = require('./routes/user')
app.use('/user', userRouter)

const productRouter = require('/routes/product')
app.use('/products', productRouter)