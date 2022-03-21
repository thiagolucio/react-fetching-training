import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClients';

import { App } from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
