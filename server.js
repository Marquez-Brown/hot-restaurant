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
        routeName: "table2",
        name: "reservedtable2",
        email: "xxx",
        phone: 900,
        id: 2000
      },
      {
        routeName: "table3",
        name: "reservedtable3",
        email: "xxx",
        phone: 900,
        id: 2000
      },
      {
        routeName: "table4",
        name: "reservedtable4",
        email: "xxx",
        phone: 900,
        id: 2000
      },
      {
        routeName: "table5",
        name: "reservedtable5",
        email: "xxx",
        phone: 900,
        id: 2000
      },
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
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  //ROUTE FOR TABLES
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });




//API ROUTES

//GET ALL TABLE DATA

//CREATE A TABLE/RESERVATION

//listen on the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });