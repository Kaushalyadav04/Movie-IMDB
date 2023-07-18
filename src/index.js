import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const logger = function({dispatch,getState}){
  return function(next){
    return function(action){
      // console.log(action.type,"ACTION_TYPE");
      next(action);
    }
  }
}

// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//       //logger code
//       if(typeof action==='function'){
//         action(dispatch);
//         return;
//       }
//       next(action);
  
//   }

const store = createStore(rootReducer,applyMiddleware(logger,thunk));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);


