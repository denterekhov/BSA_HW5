/*jshint esversion: 6 */
const users = require('./users');
const messages = require('./messages');

module.exports = function(app){
  app.use('/users', users);
  app.use('/messages', messages);
};