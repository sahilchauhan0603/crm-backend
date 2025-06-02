const customerModel = require('../models/customerModel');

// Add a new customer
const addCustomer = async (data) => {
  return await customerModel.add(data);
};

// Get all customers
const getAllCustomers = async () => {
  return await customerModel.getAll();
};

// Get a customer by ID
const getCustomerById = async (id) => {
  return await customerModel.getById(id);
};

// Update a customer
const updateCustomer = async (email, data) => {
  return await customerModel.update(email, data);
};

// Delete a customer
const deleteCustomer = async (email) => {
  return await customerModel.delete(email);
};

module.exports = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
