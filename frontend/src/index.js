import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { client } from "./api/requests/services.gen";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1"

client.setConfig({
  baseUrl: API_URL,
});

client.interceptors.request.use((config) => {
  return config;
});

client.interceptors.response.use((response) => {
  return response;
});

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
