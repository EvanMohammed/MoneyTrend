// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {
  app.get('/', (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('landing');
    }
    res.render('signup', { layout: false });
  });

  app.get('/login', (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render('landing');
    }
    res.render('login', { layout: false });
  });

  /* Here we've add our isAuthenticated middleware to this route.
  If a user who is not logged in tries to access
  this route they will be redirected to the signup page */
  app.get('/home', isAuthenticated, (req, res) => {
    res.render('landing');
  });

  app.get('/expenses', isAuthenticated, (req, res) => {
    res.render('expenses', { layout: 'drilldown' });
  });

  app.get('/income', isAuthenticated, (req, res) => {
    res.render('income', { layout: 'drilldown' });
  });
};
