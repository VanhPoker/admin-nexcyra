import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();
// Debug environment variables
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('PG_HOST:', process.env.PG_HOST);

const client = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port: 5432,
    user: 'postgres.xerhongzzthmhepynkxk',
    password: 'nexcyra2025',
    database: 'postgres',
  },
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);