const express = require('express');
const router = express.Router();
const defaultController = require('../controller/default_Controller')

router.get('/',defaultController.getDefault);
router.get('/about',defaultController.getAbaut);
router.get('/add',defaultController.getAdd)


module.exports = router