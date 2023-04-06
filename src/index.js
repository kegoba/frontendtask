import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "font-awesome/css/font-awesome.min.css";
import {Provider} from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './components/reducer/PersistStore'
//<PersistGate loading={null} persistor={persistor}> // null passed to loading, persistor is being used here
//    <App />
//</PersistGate>







//const store = createStore(AppReducer)

ReactDOM.render(
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
       <App />
    </PersistGate>
   </Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
