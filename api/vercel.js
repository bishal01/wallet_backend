const serverless = require('serverless-http');
const app = require('./index'); // Use the Express app from index.js

module.exports = serverless(app);