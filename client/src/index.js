import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
//import {createStore,applyMiddleware,compose} from 'redux';
//import rootReducer from './Store/Reducers/rootReducer';
//import {Provider} from 'react-redux';
//import thunk from 'redux-thunk';
//import {reduxFirestore,getFirestore} from 'redux-firestore';
//import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
//import fbConfig from './fbConfig/fbconfig';

// const store=createStore(rootReducer,
//     compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig,{attachAuthIsReady:true})
//     )
// );

const app=(
    <BrowserRouter>
     <App/>
    </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));
/*store.firebaseAuthIsReady.then(()=>
{
    
})*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
