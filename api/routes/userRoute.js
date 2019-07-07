const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const userController = require('../controllers/userController');


// a simple test url to check that all of our files are communicating correctly.
router.post('/create', userController.userCreate);
router.get('/:id', userController.userDetails);
router.put('/:id/update', userController.userUpdate);
router.delete('/:id/delete', userController.userDelete);

module.exports = router;