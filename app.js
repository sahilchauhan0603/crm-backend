// route registration file

const express = require('express');
require('dotenv').config(); // Load .env variables

const {setupKinde, protectRoute, getUser, GrantType} = require("@kinde-oss/kinde-node-express")

const cors = require('cors');
const app = express();

// Use env variables for config
const config = {
	clientId: process.env.KINDE_CLIENT_ID,
	issuerBaseUrl: process.env.KINDE_ISSUER_BASE_URL,
	siteUrl: process.env.KINDE_SITE_URL,
	secret: process.env.KINDE_CLIENT_SECRET,
	redirectUrl: process.env.KINDE_REDIRECT_URI,
  scope: "sahilchauhan0603@gmail.com",
  grantType: GrantType.AUTHORIZATION_CODE, //or CLIENT_CREDENTIALS or PKCE
  unAuthorisedUrl: "http://localhost:5173/unauthorised",
  postLogoutRedirectUrl: "http://localhost:5173"
};

setupKinde(config, app);

// Route imports
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const segmentRoutes = require('./routes/segmentRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');
const communicationLogRoutes = require('./routes/communicationLogRoutes');
const aiRoutes = require('./routes/aiRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

// Enable CORS
app.use(cors({
  origin: process.env.KINDE_SITE_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Use routes
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/segments', segmentRoutes);
app.use('/api/campaigns', campaignRoutes);
app.use('/api/delivery', deliveryRoutes);
app.use('/api/communication', communicationLogRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/analytics', analyticsRoutes);

module.exports = app;
