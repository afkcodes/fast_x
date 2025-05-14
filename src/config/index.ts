import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const config = {
  environment: process.env.NODE_ENV || 'development',
  host: process.env.HOST || '0.0.0.0',
  port: Number.parseInt(process.env.PORT || '3000', 10),
  logLevel: process.env.LOG_LEVEL || 'info',
  apiKey: process.env.API_KEY,
  swagger: {
    host: process.env.SWAGGER_HOST || 'localhost:3000',
  },
};
