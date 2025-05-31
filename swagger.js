const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CRM Data Ingestion API',
      version: '1.0.0',
      description: 'APIs for ingesting customer & order data',
    },
  },
  apis: ['./routes/*.js'], // Path to API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;