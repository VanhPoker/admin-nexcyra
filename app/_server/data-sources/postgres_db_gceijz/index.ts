import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';

/**
 * Learn more at https://knexjs.org/guide/#configuration-options
 */console.log('--- DEBUGGING SECRET KEY ---');
console.log('SECRET_KEY value is:', process.env.SECRET_KEY);
console.log('Type of SECRET_KEY is:', typeof process.env.SECRET_KEY);
console.log('--- END DEBUGGING ---');
const client = knex({
  client: 'pg',
  connection: {
    host: process.env.PG_HOST || 'db.xerhongzzthmhepynkxk.supabase.co',
    port: parseInt(process.env.PG_PORT || '5432'),
    user: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || 'nexcyra2025',
    database: process.env.PG_DATABASE || 'postgres',
  },
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);