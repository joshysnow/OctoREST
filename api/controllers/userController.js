const User = require('../models/user');

exports.index = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request for user home page');

  res.send('NOT IMPLEMENTED: Site Home Page');
};

exports.user_post = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request to store a user');

  req.checkBody('firstName', 'First Name Requied').notEmpty();
  req.checkBody('lastName', 'Last Name Requied').notEmpty();

  req.sanitize('firstName').escape();
  req.sanitize('lastName').escape();

  req.sanitize('firstName').trim();
  req.sanitize('lastName').trim();

  const errors = req.validationErrors();

  const user = new User({
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    age : req.body.age,
    nationality : req.body.nationality,
  });

  if (errors){
    res.send({'user': user, 'errors': errors});
  }

  user.save((err) => {
    if (err) { return next(err); }
    res.send({'user': user});
  });
};

exports.user_get = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request for specific user');

  User.findById(req.params.id)
    .exec((err, user) => {
      if (err) { return next(err); }
      res.send({'user': user});
    });
};

exports.user_delete = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request to delete specific user');

  User.findById(req.params.id).remove().exec((err, user) => {
      if(err) {return next(err);}
    res.send('User Deleted');
  });
};

exports.user_list = (req, res) => {
  const dateTime = new Date(Date.now()).toLocaleString();
  console.log('LOG ' + dateTime + ': request for user list');

  User.find({}, 'firstName lastName age nationality')
    .exec((err, list_users) => {
      if (err) { return next(err); }
      res.send({'users': list_users});
    });
};
