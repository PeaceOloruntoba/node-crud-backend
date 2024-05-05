const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send("Hello Dude ")
})

app.listen(3000, () => {
    console.log("I am running");
})