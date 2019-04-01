'use strict';
module.exports = function(app) {
  var name = require('../controllers/nameController');

  // account user Routes
  app.route('/home')
    .get(name.user.account_information)
    .post(name.login_to_account);


  app.route('/home/:useraccount')
    .get(snkcoll.list_a_totalvalue)
    .put(snkcoll.update_totalvalue)
    .delete(snkcoll.delete_a_task);
};


var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('kit sneakers RESTful API server started on: ' + port);

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);

