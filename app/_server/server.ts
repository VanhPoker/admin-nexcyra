import { app } from './app';
console.log('--- DEBUGGING SECRET KEY ---');
console.log('SECRET_KEY value is:', process.env.SECRET_KEY);
console.log('Type of SECRET_KEY is:', typeof process.env.SECRET_KEY);
console.log('--- END DEBUGGING ---');
async function bootstrap() {
  // Use the PORT environment variable to set the port in production
  await app.listen();
}

bootstrap().catch(err => {
  console.error(err);
  process.exit(1);
});