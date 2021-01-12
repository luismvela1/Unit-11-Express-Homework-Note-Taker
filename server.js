//setup dependencies
var express = require("express");
var fs = require ("fs");

//creating an express server
var app = express();

// port that the listener will listen to 
var PORT = process.env.PORT || 8080;

// sets up express to execute data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//server listener
app.listen(PORT,function(){
    console.log("App listing on PORT:"+PORT);
});


