// const express = require('express')
import express from "express"
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 8080

// config view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', (req,res) => {
    res.render('home.ejs')
});

app.get('/louisdev', (req,res) => {
    res.send(`<h1>Hello. Louis here 😜</h1>`)
});

app.get('/abc_angel', (req,res) => {
    res.send("🫰 Hi. abc_Angel Group Dance")
});

// Listen
app.listen(PORT, () => {
    console.log(`My App is running on port ${PORT}...`);
    console.log(__dirname + '/views');
})