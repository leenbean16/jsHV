/* Home Venues
 * backend / server / routes
 * ==================== */

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var logger = require("morgan");

var app = express();

// Set the app up with morgan, body-parser, and a static folder
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static("public"));

// Database configuration
var databaseUrl = "home-venues";
var collections = ['listings', 'users', 'bookings', 'signUp'];

// Hook mongojs config to db variable
// connect now, and worry about collections later
var db = mongojs('mydb')
var mycollection = db.collection('mycollection')

console.log(mycollection);

// Log any mongojs errors to console
db.on("error", function(error) {
    console.log("Database Error:", error);
});


// Routes
// ======

// Simple index route
app.get("/", function(req, res) {

});


app.post("/addListing", function(req, res) {
    console.log('added');
});

// // Go to map page
// app.get("/findVenue", function(req, res) {
//     // When searching by an id, the id needs to be passed in
//     // as (mongojs.ObjectId(IDYOUWANTTOFIND))

//     // Update the note that matches the object id
//     db.notes.update({
//         "_id": mongojs.listingId(req.params.id)
//     }, {
//         // Set the title, note and modified parameters
//         // sent in the req's body.
//         $set: {
//             "id": req.body.id,
//             "note": req.body.note,
//             "modified": Date.now()
//         }
//     }, function(error, edited) {
//         // Log any errors from mongojs
//         if (error) {
//             console.log(error);
//             res.send(error);
//         }
//         // Otherwise, send the mongojs response to the browser
//         // This will fire off the success function of the ajax request
//         else {
//             console.log(edited);
//             res.send(edited);
//         }
//     });
// });

// // Retrieve results from mongo
// app.get("/all", function(req, res) {
//   // Find all notes in the notes collection
//   db.notes.find({}, function(error, found) {
//     // Log any errors
//     if (error) {
//       console.log(error);
//     }
//     // Otherwise, send json of the notes back to user
//     // This will fire off the success function of the ajax request
//     else {
//       res.json(found);
//     }
//   });
// });

// // Select just one note by an id
// app.get("/find/:id", function(req, res) {

//   // When searching by an id, the id needs to be passed in
//   // as (mongojs.ObjectId(IDYOUWANTTOFIND))

//   // Find just one result in the notes collection
//   db.notes.findOne({
//     // Using the id in the url
//     "_id": mongojs.ObjectId(req.params.id)
//   }, function(error, found) {
//     // log any errors
//     if (error) {
//       console.log(error);
//       res.send(error);
//     }
//     // Otherwise, send the note to the browser
//     // This will fire off the success function of the ajax request
//     else {
//       console.log(found);
//       res.send(found);
//     }
//   });
// });


// // Delete One from the DB
// app.get("/delete/:id", function(req, res) {
//   // Remove a note using the objectID
//   db.notes.remove({
//     "_id": mongojs.ObjectID(req.params.id)
//   }, function(error, removed) {
//     // Log any errors from mongojs
//     if (error) {
//       console.log(error);
//       res.send(error);
//     }
//     // Otherwise, send the mongojs response to the browser
//     // This will fire off the success function of the ajax request
//     else {
//       console.log(removed);
//       res.send(removed);
//     }
//   });
// });


// // Clear the DB
// app.get("/clearall", function(req, res) {
//   // Remove every note from the notes collection
//   db.notes.remove({}, function(error, response) {
//     // Log any errors to the console
//     if (error) {
//       console.log(error);
//       res.send(error);
//     }
//     // Otherwise, send the mongojs response to the browser
//     // This will fire off the success function of the ajax request
//     else {
//       console.log(response);
//       res.send(response);
//     }
//   });
// });


// Listen on port 3000
app.listen(27017, function() {
    console.log("App running on port 7777!");
});