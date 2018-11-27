import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import './components/RoomList';
import RoomList from './components/RoomList';

var config = {
  apiKey: "AIzaSyAUvEF3g0VofZ1r-qb4EUou6qrd9_vhUoo",
  authDomain: "bloc-chat-react-441ac.firebaseapp.com",
  databaseURL: "https://bloc-chat-react-441ac.firebaseio.com",
  projectId: "bloc-chat-react-441ac",
  storageBucket: "bloc-chat-react-441ac.appspot.com",
  messagingSenderId: "392735703160"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoomList firebase={ firebase } />
      </div>
    );
  }
}

export default App;
