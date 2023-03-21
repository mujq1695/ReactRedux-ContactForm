import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import {QueryClientProvider  } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import {ReactQueryDevtools} from 'react-query/devtools'
import queryClient from './query-client-provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
    </QueryClientProvider>
  </React.StrictMode>
);
