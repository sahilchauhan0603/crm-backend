// route registration file 

const express = require('express');
const app = express();

const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const segmentRoutes = require('./routes/segmentRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const communicationLogRoutes = require('./routes/communicationLogRoutes');

app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/segments', segmentRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/communication', communicationLogRoutes);

module.exports = app;