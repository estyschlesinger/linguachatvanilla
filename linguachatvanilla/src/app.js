const express = require("express");
const path = require("path")
const fs = require('fs')
const http = require('http')
// const mysql = require('mysql');
// const session = require('express-session')
const {I18n} = require('i18n')
const i18n = new I18n({
    locales: ['en', 'he'],
    directory: path.join(__dirname, 'locales')
})

const my18 = http.createServer((req, res) =>{
    i18n.init(req, res)
    res.end(res.__('Hello'))
})


// const connection  = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'nodelogin'
// });

// connection.connect(function(err) {
//     if(err){
//         return console.error('error: '+err.message);
//     }
//     console.log('connected to the MYSQL server.')
// })

const app = express()

// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
// }))

// app.use(express.json());
// app.use(express.urlencoded({extended: true}))

//set static folder
app.use('/public', express.static(path.join(__dirname, '../public')))


app.get('/login', function(request, response){
    response.sendFile(path.join(__dirname+'/login.html'))
})




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
