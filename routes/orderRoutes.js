const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.addOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.get('/customer/:customerId', orderController.getOrdersByCustomer);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
