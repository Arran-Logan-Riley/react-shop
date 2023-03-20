import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <App />
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
