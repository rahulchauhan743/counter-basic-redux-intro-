import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import App from './App';

import { counterReducer, loginReducer } from "./redux/reducers";

//here we can use more than one reducers at single time
let rootReducer = combineReducers({
  count : counterReducer,
  logged : loginReducer,
})

//it is a function to which we pass a reducer 
//this gives me a store or we created a store for storing a state
//we created a store and given it a reducer
let myStore = createStore(rootReducer);



ReactDOM.render(

  //to connect redux to react app 
  //we wrap "app" with provider and give it store  as mystore which we cretaed ourself
  //now mystore is assecable to all componenets in react app
  //and we can takeout state from mystore in any componenet and use it 
 //we give store to provider which is parent of app
 //by giving it to parent of app(provider) store can be used by any child of app
 
 <Provider store = {myStore}>
    <App />
 </Provider>

 ,
  document.getElementById('root')
);

