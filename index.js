const express = require('express');
var cors = require('cors');

const connection = require('./connection');

const userRoute = require('./routes/user');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRoute);

// app.get("/", (req, res) => {
//     res.send("Hello World")
// })

module.exports = app;



