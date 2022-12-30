const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("We got a new request")
//     res.send("hello, we got your request. this is a response")
// })

app.get('/', (req, res)=>{
    res.send("this is the home page")
})

app.get('/blog', (req,res) =>{
    res.send('this is a blog template')
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})