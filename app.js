const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

require('dotenv/config');
app.use(bodyParser.json());

//import routes
const postRoutes = require('./routes/Post') 


app.use('/post', postRoutes);
//routes
app.get('/', (req, res)=>{
    res.send('Testing it');
})

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    ()=>{console.log('Connected to db');
})

app.listen(3000);
