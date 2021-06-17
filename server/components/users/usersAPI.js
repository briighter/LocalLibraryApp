var express = require('express');
var router = express.Router();

var userCtrl = require('./usersController')

/** User Routes */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Read Users */
router.get('/all', userCtrl.user_list);

/* Read Single User */
router.get('/user/:id', userCtrl.user_detail);

router.post('/user/create', userCtrl.user_create_post);

router.patch('/user/:id/update', userCtrl.user_update_post);

router.delete('/user/:id/delete', userCtrl.user_delete_post);

module.exports = router;
