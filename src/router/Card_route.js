const express = require('express');
const route = express.Router();
const cardController = require('../controller/card_controller')

route.post('/add',cardController.addCard)
route.get('/:id',cardController.getSimpleCardById)
route.get('/edited/:id',cardController.getSimpleEditedPage)
route.post('/edit/:id',cardController.updateCardById)
route.get('/delete/:id',cardController.deleteCardById)



module.exports = route