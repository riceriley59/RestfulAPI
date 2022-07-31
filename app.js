//import and initialize express module
const express = require('express');
const app = express();

//ROUTES 
app.get('/', (req, res) => {
    res.send("We are on Home");
});

//start listenting for server on port 3000
app.listen(3000);