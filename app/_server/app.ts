import { createApp } from '@kottster/server';
import schema from '../../kottster-app.json';

export const app = createApp({
  schema,


  secretKey: process.env.SECRET_KEY || 'mN2zpvsnVtamDACAOM8ffVjx',
});