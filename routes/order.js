// In routes/orders.js

const express = require('express');
const router = express.Router();
const Order = require('../models/orders');

// GET /api/orders
router.get('/', async (req, res) => {
  try {
    // Find all orders in the database
    const orders = await Order.find();

    // Return success response with orders
    res.status(200).json(orders);
  } catch (error) {
    // Return error response
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// POST /api/orders
router.post('/', async (req, res) => {
  try {
    // Validate request body
    const { title, description, location, user_id } = req.body;
    if (!title || !description || !location || !user_id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create new order object
    const newOrder = new Order({
      title,
      description,
      location,
      user_id,
      status: 'pending',
    });

    // Save order to database
    const savedOrder = await newOrder.save();

    // Return success response
    res.status(201).json(savedOrder);
  } catch (error) {
    // Return error response
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
// In routes/users.js
