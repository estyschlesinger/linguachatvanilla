const express = require("express");

const app = express()
const path= require("path")


app.use(express.static(path.join(__dirname, '/public')))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res)=>{
    res.render('hom')
})

app.post('/blog', (req, res)=> {
    res.send('post request to /blog')
})

app.get('/blog', (req,res) =>{
    res.render('blog')
})

app.get('*', (req, res) =>{ //last 
    res.send(`you have reached no man's land `)
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})