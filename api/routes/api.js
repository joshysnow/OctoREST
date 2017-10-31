const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user');

/// USER ROUTES ///

/* GET user home page. */
router.get('/', user_controller.index);

/* GET request for a specific user. */
router.get('/user/:id', user_controller.user_get);

/* GET request for list of all users. */
router.get('/users', user_controller.user_list);

module.exports = router;
