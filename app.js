//import and initialize express modules along with others
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');
const postsRoute = require('./routes/posts');

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors());

//import routes
app.use('/posts', postsRoute);


//connect to database
mongoose.connect(
    process.env.DB_connection, 
    {useNewUrlParser: true},
    ()=> console.log('Connected to DB')
);

//start listenting for server on port 3000
app.listen(3000);