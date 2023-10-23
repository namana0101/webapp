// Require express
const express = require("express");

// App object
const app = express();

// Main page
app.get("/", function(req, res) {
  res.send("Welcome to my first Node.js web site. <br> <a href='/contact'>Contact Information</a> <br> <a href='/bio'>Short Bio</a>");
});

// Contact page
app.get("/contact", function(req, res) {
  res.send("My name is Swarup Kumar Namana, My student Id: 0783302, Email: namana01@email.franklin.edu <br> <a href='/'>Go back to main page</a>");
});

// Bio page
app.get("/bio", function(req, res) {
  res.send("My name is Swarup. Currently, I'm pursuing my Masters in IT <br> <a href='/'>Go back to main page</a>");
});

// If the code runs on render, assign a dynamic port number
let port = process.env.PORT;

// If it runs locally, assign 8002 as the static port
if (port == null || port == "") {
  port = 8002;
}

// Set the server to listen on the determined port
app.listen(port, function() {
  console.log("Server is running on port " + port);
});

