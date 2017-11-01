const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

/// USER ROUTES ///

/* GET user home page. */
router.get('/', user_controller.index);

/* GET request for a specific user. */
router.get('/user/:id', user_controller.user_get);

/* DELETE request for a specific user. */
router.delete('/user/:id', user_controller.user_delete);

/* PUT request to update a specific user. */
router.put('/user/:id', user_controller.user_update);

/* POST request for a specific user. */
router.post('/user', user_controller.user_post);

/* GET request for list of all users. */
router.get('/users', user_controller.user_list);

module.exports = router;
