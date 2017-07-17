/*jshint esversion: 6 */
const database = require('./database');

function findMessage(id){
  let err = null;
  if (typeof id === 'undefined'){
    err = new Error('id is undefined');
  }

  let index;
  const message = database.messages.find((el, ind) => {
    if (el.id === id){
      index = ind;
      return true;
    } else {
      return false;
    }
  });
  return {message, index, err};
}

module.exports = {
  findAll: (callback) => {
    callback(null, database.messages);
  },

  findOne: (id, callback) => {
    const {err, message} = findMessage(id);
    callback(err, message);
  },

  addMessage: (message, callback) => {
    if (typeof message.id !== 'undefined'){
      database.messages.push(message);
      callback(null);
    } else {
      callback(new Error('message doesn\'t have id'));
    }
  },

  findOneAndDelete: (id, callback) => {
    let {err, message, index} = findMessage(id);
    if (typeof index !== 'undefined'){
      database.messages.splice(index, 1);
    } else {
      err = new Error('no messages with such index');
    }
    callback(err);
  },

  findOneAndUpdate: (id, message, callback) => {
    const {err, index} = findMessage(id);
    database.messages[index] = Object.assign(database.messages[index], message);
    callback(err);
  }
};