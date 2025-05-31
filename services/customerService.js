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

module.exports = {
  addCustomer,
  getAllCustomers,
  getCustomerById,
};
