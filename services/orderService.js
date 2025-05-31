const orderModel = require('../models/orderModel');

const addOrder = async (data) => {
  return await orderModel.add(data);
};

const getOrdersByCustomer = async (customerId) => {
  return await orderModel.getByCustomerId(customerId);
};

const getAllOrders = async () => {
  return await orderModel.getAll();
};

const getOrderById = async (id) => {
  return await orderModel.getById(id);
};

module.exports = {
  addOrder,
  getOrdersByCustomer,
  getAllOrders,
  getOrderById,
};
