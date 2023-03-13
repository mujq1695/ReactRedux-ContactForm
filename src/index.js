import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store'
import { QueryClientProvider,QueryClient  } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

// //ACTIONS
// const increment=()=>{

//   return {

//     type:"INCREMENT"
//   }
// }

// const decrement=()=>{

//   return {

//     type:"DECREMENT"
//   }
// }

// //REDUCER

// const counter=(state=0,action)=>{

//   switch(action.type){

//     case "INCREMENT":
//       return state + 1;

//     case "DECREMENT":
//       return state - 1;
//   }

// }

// //STORE

// let store=createStore(counter);

// //DISPLAY IN CONSOLE
// store.subscribe(()=>console.log(store.getState()));


// //DISPATCH

// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());
const queryClient= new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
