const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./src/config/dbConfig');
const serverConfig = require('./src/config/serverConfig');
const reportingRoutes = require('./src/routes/reportingRoutes');
const logger = require('./src/utils/logger');

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors(serverConfig.corsOptions));
app.use(morgan('dev'));

// Routes
app.use('/api/reports', reportingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
const PORT = serverConfig.port;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
