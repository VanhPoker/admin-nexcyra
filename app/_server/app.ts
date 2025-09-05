import { createApp } from '@kottster/server';
import schema from '../../kottster-app.json';

export const app = createApp({
  schema,


  secretKey: 'jzNAEsnmybrntoU1TtXQuxHOuzzqum3WjULZholmpMtDpbxe',
});