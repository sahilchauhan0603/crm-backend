const customerService = require('../services/customerService');

// Add a new customer
const addCustomer = async (req, res) => {
  try {
    const result = await customerService.addCustomer(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error adding customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const result = await customerService.getAllCustomers();
    res.json(result);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific customer by ID
const getCustomerById = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await customerService.getCustomerById(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a customer
const updateCustomer = async (req, res) => {
  try {
    const result = await customerService.updateCustomer(req.params.email, req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
  try {
    const result = await customerService.deleteCustomer(req.params.email);
    res.json(result);
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Export all controller functions
module.exports = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
