import React from 'react';
import ReactDOM from 'react-dom/client';
import { KottsterApp } from '@kottster/react';
import '@kottster/react/dist/style.css';
console.log('--- DEBUGGING SECRET KEY ---');
console.log('SECRET_KEY value is:', process.env.SECRET_KEY);
console.log('Type of SECRET_KEY is:', typeof process.env.SECRET_KEY);
console.log('--- END DEBUGGING ---');
const pageEntries = import.meta.glob('./pages/**/index.{jsx,tsx}', { eager: true });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KottsterApp pageEntries={pageEntries} />
  </React.StrictMode>
);