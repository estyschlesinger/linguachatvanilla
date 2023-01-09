const express = require("express");
const path = require("path")
const fs = require('fs')

const app = express()

//set static folder
app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req, res)=>{
    res.send('hello from express')
})
// //always returning index.html, do I need views?

app.get('/feed', (req, res) => {
    res.send('this is your feed')
})

app.get('/about', (req, res) => {
    res.sendFile('C:/Users/Esty/Desktop/linguachatvanilla/linguachatvanilla/public/about.html')
}) //shorten this

app.get('*', (req, res) =>{ //last 
    res.send(`"This page does not exist"`)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})
