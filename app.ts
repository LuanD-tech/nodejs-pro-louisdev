// const express = require('express')
import express from "express"

const app = express()
const PORT = 8080

app.get('/', (req,res) => {
    res.send("Hi 👋, Can I help You?")
});

app.get('/louisdev', (req,res) => {
    res.send("Hello. Louis here 😜")
});

app.listen(8080, () => {
    console.log(`My App is running on port ${PORT}...`);
})