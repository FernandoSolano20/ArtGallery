const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/viewsController');

router.get('', viewsController.index);
router.get('/signUp', viewsController.signUp);

module.exports = router;