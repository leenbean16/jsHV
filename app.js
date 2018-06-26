/* Home Venues
 * Backend
 * Lina Shamoon
 * ==================== */

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var logger = require("morgan");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(express.static("public"));

// Database configuration
var databaseUrl = "homevenues";
var collections = ['listings', 'users', 'bookings'];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl, collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});


// Routes
// ======

// Simple index route
app.get("/", function(req, res) {
  res.send(index.html);
});


app.get("/addListing.html", function(req, res) {
  res.redirect(addListing.html);
});


app.post("/submit", function(req, res) {
  console.log(req.body);
  // Insert the note into the notes collection
  db.homevenues.insert(req.body, function(error, saved) {
    // Log any errors
    if (error) {
      console.log(error);
    }
  });
});


// Listen on port 27017
app.listen(27017, function() {
  console.log("App running on port 27017!");
});
