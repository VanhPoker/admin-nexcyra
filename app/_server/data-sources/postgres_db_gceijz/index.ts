import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';


const client = knex({
  client: 'pg',
  connection: {
    host:  'db.xerhongzzthmhepynkxk.supabase.co',
    port: parseInt( '5432'),
    user:  'postgres',
    password:  'nexcyra2025',
    database:  'postgres',
  },
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);