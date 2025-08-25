import env from '@/config/env';
import axios from 'axios';

const judgeInstance = axios.create({
  baseURL: env.JUDGE0_API_ENDPOINT,
  headers: { 'Content-Type': 'application/json' },
});

judgeInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    throw error;
  }
);
