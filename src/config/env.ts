import dotenv from '@dotenvx/dotenvx';
dotenv.config();

const env = {
  // App
  NODE_ENV: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  API_PORT: Number(process.env.API_PORT),
  JUDGE0_API_ENDPOINT: process.env.JUDGE0_API_ENDPOINT || '',

  // Database
  DATABASE_HOST: process.env.JUDGE0_DATABASE_HOST || 'localhost',
  DATABASE_PORT: parseInt(process.env.JUDGE0_DATABASE_PORT || '5432'),
  DATABASE_NAME: process.env.JUDGE0_DATABASE_NAME,
  DATABASE_USERNAME: process.env.JUDGE0_DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.JUDGE0_DATABASE_PASSWORD,
};

export default env;
