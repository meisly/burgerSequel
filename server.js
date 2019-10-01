const express = require("express");
const PORT = process.env.PORT || 8080;

let app = express();

// Requiring our models for syncing
const db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const hbs = require("express-handlebars");

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
require("./controllers/burgers_controller")(app);





// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
