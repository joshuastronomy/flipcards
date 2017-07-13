const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const pug = require('pug');
const bodyParser = require('body-parser');
const session = require('express-session');
const myRouter = require('./routes/routes');
const app = express();

app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(session({
  secret: 'h8 dat bacon',
  resave: false,
  saveUninitialized: false
}))

app.use('/public', express.static('public'));

app.use('/', myRouter);

app.listen(3000, (req, res) => {
  console.log("Flipcards are flippin'...")
})
