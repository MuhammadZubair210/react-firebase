import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyDfeSqBI__7UVWBv65VUTSK69YpYSbp0y4",
    authDomain: "react-first-128f3.firebaseapp.com",
    databaseURL: "https://react-first-128f3.firebaseio.com",
    projectId: "react-first-128f3",
    storageBucket: "",
    messagingSenderId: "155259103262"
};

firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
