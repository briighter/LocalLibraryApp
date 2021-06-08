var express = require('express');
var router = express.Router();

var userCtrl = require('./usersController')

/** User Routes */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Read Users */
router.get('/users', userCtrl.user_list);

/* Read Single User */
router.get('/user/:id', userCtrl.user_detail);

router.get('/user/create', userCtrl.createUser);

router.patch('/user/:id/update', userCtrl.updateUser);

router.delete('/user/:id/delete', userCtrl.deleteUser);

module.exports = router;
