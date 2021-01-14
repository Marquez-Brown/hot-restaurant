// REQUIRE EXPRESS
// CREATE AN INSTANCE OF EXPRESS
// CREATE A PORT FOR THE APP TO RUN
// BUT ALSO LISTEN TO ENVIRONMENT VARIABLES SO WE CAN DEPLOY TO HEROKU
var express = require("express");
var path = require("path");

var app = express();
const PORT = process.env.PORT || 3000

//add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create an array of table (array of objects)
//create and array for waitlist
var tables = [
    {
      routeName: "table1",
      name: "reservedtable1",
      email: "xxx",
      phone: 900,
      id: 2000
    },
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
      },
      {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
      },
    {
      routeName: "darthmaul",
      name: "Darth Maul",
      role: "Sith Lord",
      age: 200,
      forcePoints: 1200
    },
    {
      routeName: "obiwankenobi",
      name: "Obi Wan Kenobi",
      role: "Jedi Master",
      age: 55,
      forcePoints: 1350
    }
  ];
// arrays of objets. objects should have 
// name
// phone
// email
// to

//HTML ROUTES
//ROUTE FOR HOME
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
//ROUTE FOR RESERVE
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  //ROUTE FOR TABLES
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });






//API ROUTES

//GET ALL TABLE DATA

//CREATE A TABLE/RESERVATION

//listen on the port