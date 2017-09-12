const express = require('express');
const { addUser, getUsers } = require('../controller/userController');

const router = express.Router();

router.route('/users')
  .get(getUsers);

router.route('/user')
  .post(addUser);

module.exports = router;
