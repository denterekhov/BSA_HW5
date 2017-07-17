/*jshint esversion: 6 */
const database = require('./database');

function findUser(id){
  let err = null;
  if (typeof id === 'undefined'){
    err = new Error('id is undefined');
  }

  let index;
  const user = database.users.find((el, ind) => {
    if (el.id === id){
      index = ind;
      return true;
    } else {
      return false;
    }
  });
  return {user, index, err};
}

module.exports = {
  findAll: (callback) => {
    callback(null, database.users);
  },

  findOne: (id, callback) => {
    const {err, user} = findUser(id);
    callback(err, user);
  },

  addUser: (user, callback) => {
    if (typeof user.id !== 'undefined'){
      database.users.push(user);
      callback(null);
    } else {
      callback(new Error('user doesn\'t have id'));
    }
  },

  findOneAndDelete: (id, callback) => {
    let {err, user, index} = findUser(id);
    if (typeof index !== 'undefined'){
      database.users.splice(index, 1);
    } else {
      err = new Error('no users with such index');
    }
    callback(err);
  },

  findOneAndUpdate: (id, user, callback) => {
    const {err, index} = findUser(id);
    database.users[index] = Object.assign(database.users[index], user);
    callback(err);
  },

  findAllSubscribers: (id, user, callback) => {
    let subscribers = [];
    database.messages.forEach(message => {
      if(message.receiverId == id) {
        database.users.forEach(user => {
          if(message.senderId == user.id && subscribers.indexOf(user) == -1) {
            subscribers.push(user);
          }
        });
      }
    });    
    database.messages.forEach(message => {
      if(message.senderId == id) {
        database.users.forEach(user => {
          if(message.receiverId == user.id && subscribers.indexOf(user) == -1) {
            subscribers.push(user);
          }
        });
      }
    });
    callback(null, subscribers);
  },
};