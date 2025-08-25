import env from '@/config/env';
import Language from '@/entities/Language.entity';
import Problem from '@/entities/Problem.entity';
import Submission from '@/entities/Submission.entity';
import TestCase from '@/entities/TestCase.entity';
import User from '@/entities/User.entity';
import { UserSubmission } from '@/entities/UserSubmission.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  // host: env.DATABASE_HOST,
  host: 'localhost',
  port: env.DATABASE_PORT,
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  synchronize: process.env.NODE_ENV === 'development', // Only in development
  logging: process.env.NODE_ENV === 'development',
  entities: [User, Language, Submission, Problem, TestCase, UserSubmission], // Add your entities here
});
