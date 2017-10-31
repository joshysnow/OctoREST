const fs = require('fs');

exports.index = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request for user home page');

  res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.user_post = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request to store a user');

  res.send('NOT IMPLEMENTED: User POST');
};

exports.user_get = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request for specific user');

  res.send('NOT IMPLEMENTED: User GET');
};

exports.user_list = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request for user list');

  res.send('NOT IMPLEMENTED: List users GET');
};
