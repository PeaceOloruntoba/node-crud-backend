const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.get('/', (req, res) => {
    res.send("Hello Dude ")
})

app.post('/employee', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


mongoose.connect(
    "mongodb+srv://admin:qwert12345@firstcrud.xyz6edf.mongodb.net/firstcrudAPI?retryWrites=true&w=majority&appName=firstcrud"
).then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(3000, () => {
        console.log("I am running");
    })
}).catch((error) => {
    console.log(error);
});