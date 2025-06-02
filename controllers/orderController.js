const orderService = require('../services/orderService');

// Add a new order
const addOrder = async (req, res) => {
  try {
    const result = await orderService.addOrder(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get orders by customer ID
const getOrdersByCustomer = async (req, res) => {
  try {
    const result = await orderService.getOrdersByCustomer(req.params.customerId);
    res.json(result);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const result = await orderService.getAllOrders();
    res.json(result);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  try {
    const result = await orderService.getOrderById(req.params.id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update order
const updateOrder = async (req, res) => {
  try {
    const result = await orderService.updateOrder(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete order
const deleteOrder = async (req, res) => {
  try {
    console.log(`Deleting order with ID: ${req.params.id}`); // Log the ID being deleted
    const result = await orderService.deleteOrder(req.params.id);
    console.log(`Delete result:`, result); // Log the result of the delete operation
    res.json(result);
  } catch (error) {
    console.error('Error deleting order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  addOrder,
  getOrdersByCustomer,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
