//import and initialize express module
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv/config');
const postsRoute = require('./routes/posts');

const app = express();

app.use(bodyParser.json());
app.use('/posts', postsRoute);

//connect to database
mongoose.connect(
    process.env.DB_connection, 
    {useNewUrlParser: true},
    ()=> console.log('Connected to DB')
);

//start listenting for server on port 3000
app.listen(3000);