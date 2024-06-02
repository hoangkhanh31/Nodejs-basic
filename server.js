const express = require('express')  //commonjs
//import express from 'express';    //es modules

const app = express()   // app express
const port = 8080   //port

//config template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//Khai báo route
app.get('/test', (req, res) => {
    res.send('<h1>Test!!!</h1>')
})

app.get('/', (req, res) => {
    res.render('index.ejs')
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})