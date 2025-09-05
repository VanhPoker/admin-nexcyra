import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';

/**
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'pg',
  connection: {
     host: process.env.PG_HOST || "db.xerhongzzthmhepynkxk.supabase.co",
    port: process.env.PG_PORT || 5432,
    user: process.env.PG_USER || "postgres",
    password: process.env.PG_PASSWORD || "nexcyra2025",
    database: process.env.PG_DATABASE || "postgres"
  },
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);