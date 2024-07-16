const express = require('express');
const router = express.Router();
const defaultRouter = require('./defaultRoute');
const cardRouter = require('./Card_route')

router.use('/',defaultRouter);
router.use('/card',cardRouter)

module.exports = router 