import env from '@/config/env';
import authHook from '@/middleware/auth';
import routers from '@/routes';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { AppDataSource } from './config/database';

function initialServer() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: '*' }));
  app.use(morgan('[:date[iso] - :remote-addr]: [:method] :url - :status] - :response-time[2]ms'));

  // Define route endpoint
  app.use('/auth', authHook);
  app.use('/api/v1', routers);

  app.listen(env.API_PORT, '0.0.0.0', () => {
    console.log(`🚀 App listening on port ${env.API_PORT}`);
  });
}

AppDataSource.initialize()
  .then(() => {
    console.log('✅ Database connection established');
    initialServer();
  })
  .catch((error) => {
    console.error('❌ Database connection failed:', error);
  });
