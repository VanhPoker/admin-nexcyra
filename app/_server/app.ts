import { createApp } from '@kottster/server';
import schema from '../../kottster-app.json';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('SECRET_KEY exists:', !!process.env.SECRET_KEY);
console.log('SECRET_KEY:', process.env.SECRET_KEY);

const secretKey = process.env.SECRET_KEY || (
  process.env.NODE_ENV === 'production'
    ? 'W7OtP9PGUwWdHMoDRxTzO97Tk9mnueNLhu2WuskmJeJCmM5w'
    : 'mN2zpvsnVtamDACAOM8ffVjx'
);

export const app = createApp({
  schema,
  secretKey,
});
