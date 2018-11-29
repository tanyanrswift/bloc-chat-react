import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import './components/RoomList';
import RoomList from './components/RoomList';
import './components/MessageList';
import MessageList from './components/MessageList';
import './components/User';
import User from './components/User';

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
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: '',
      user: ''
    }
  }

  handleRoomClick(e) {
    this.setState({ activeRoom : e })
  }

  setUser(user) {
    console.log(user)
    this.setState({ user })
  }

  render() {
    return (
      <div className="App">
        <RoomList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        handleRoomClick={(e) => this.handleRoomClick(e)}
        />
        <MessageList
        firebase={firebase}
        activeRoom={this.state.activeRoom}
        handleRoomClick={(e) => this.handleRoomClick(e)}
        />
        <User
        firebase={firebase}
        setUser={(e) => this.setUser(e)}
        displayName={this.state.displayName}
        />
      </div>
    );
  }
}

export default App;
