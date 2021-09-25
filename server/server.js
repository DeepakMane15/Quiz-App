const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser= require('body-parser');

const quizRoutes = require('./routes/quiz')

const db = mysql.createPool({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'quizoo'
});

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.get("/", (req,res) =>{
    
        res.send("hello world");  
})

app.listen ( 3500, () => {
    console.log('running on port 3500!');
});

// app.post("/app/create", (req,response) => {
    
// })




app.use('/app', quizRoutes);