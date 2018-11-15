var express = require("express");
var app = express();
var port = 3000;

// app.get("/", (req, res) => {
//  res.send("Hello World");
// });

//Connecting mongoDB
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/node-demo");

//Directing to the first page
app.use("/", (req,res)=>{
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
 console.log("Server listening on port " + port);
});


//Defining Database Schema
var nameSchema = new mongoose.Schema({
 firstName: String,
 lastNameName: String
});

var User = mongoose.model("User", nameSchema);
