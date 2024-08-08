const serverConfig = {
    port: process.env.PORT || 5004,
    corsOptions: {
      origin: process.env.CORS_ORIGIN || '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }
  };
  
  module.exports = serverConfig;
  