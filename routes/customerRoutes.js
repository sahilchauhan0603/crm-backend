const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/', customerController.addCustomer);
router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.put('/:email', customerController.updateCustomer);
router.delete('/:email', customerController.deleteCustomer);

module.exports = router;
