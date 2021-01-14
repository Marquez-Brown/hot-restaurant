// REQUIRE EXPRESS
// CREATE AN INSTANCE OF EXPRESS
// CREATE A PORT FOR THE APP TO RUN
// BUT ALSO LISTEN TO ENVIRONMENT VARIABLES SO WE CAN DEPLOY TO HEROKU


//add middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create an array of table (array of objects)
//create and array for waitlist

// arrays of objets. objects should have 
// name
// phone
// email
// to

//HTML ROUTES

//ROUTE FOR HOME

//ROUTE FOR TABLES

//ROUTE FOR RESERVE

//API ROUTES

//GET ALL TABLE DATA

//CREATE A TABLE/RESERVATION

//listen on the port