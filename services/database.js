/*jshint esversion: 6 */
const users = [{
  id: 1,
  first_name: 'Tyrion',
  Last_name: 'Lannister',
  email: 'tyrion@gmail.com'
},{
  id: 2,
  first_name: 'Jaime',
  Last_name: 'Lannister',
  email: 'jaime@gmail.com'
},{
  id: 3,
  first_name: 'Cersei',
  Last_name: 'Lannister',
  email: 'cersei@gmail.com'
},{
  id: 4,
  first_name: 'Daenerys',
  Last_name: 'Targaryen',
  email: 'daenerys@gmail.com'
},{
  id: 5,
  first_name: 'Sansa',
  Last_name: 'Stark',
  email: 'sansa@gmail.com'
}];

const messages = [{
  id: 1,
  senderId: 1,
  receiverId: 2,
  messageBody: 'Lorem ipsum dolor sit amet'
},{
  id: 2,
  senderId: 3,
  receiverId: 2,
  messageBody: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
},{
  id: 3,
  senderId: 4,
  receiverId: 3,
  messageBody: 'Sunt in culpa qui officia deserunt mollit anim id est laborum'
},{
  id: 4,
  senderId: 5,
  receiverId: 1,
  messageBody: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
},{
  id: 5,
  senderId: 5,
  receiverId: 3,
  messageBody: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
},{
  id: 6,
  senderId: 2,
  receiverId: 4,
  messageBody: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
}];

exports.users = users;
exports.messages = messages;