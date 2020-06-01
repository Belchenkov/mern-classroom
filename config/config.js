const config = {
  env: process.env.NODE_ENV || 'development',
  port: 3001,
  jwtSecret: process.env.JWT_SECRET || "secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
  'mongodb://belchenkov:12qwasZX@ds123695.mlab.com:23695/mern-classroom'
};

export default config;
