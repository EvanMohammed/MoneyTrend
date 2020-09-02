// Requiring necessary npm packages
const express = require('express');
const session = require('express-session');
// Requiring passport as we've configured it
const exphbs = require('express-handlebars');
const passport = require('./config/passport');

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require('./models');

// controller
const expenseAPI = require('./controllers/expensecategories');
const incomeAPI = require('./controllers/incomecontroller');

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }),
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
app.use(expenseAPI);
app.use(incomeAPI);
require('./controllers/authenticationroutes.js')(app);
require('./controllers/authenticationcontroller.js')(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT);
});
