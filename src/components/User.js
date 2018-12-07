import React, {Component} from 'react';
import './User.css';

class User extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  signIn = () => {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup(provider);
  }

  signOut = () => {
    this.props.firebase.auth().signOut();
  }

  handleSignInClick(e) {
    console.log('sign in')
    this.setState({ displayName: e.target.value })
  }

  handleSignOutClick(e) {
    console.log('sign out')
    this.setState({ displayName: null })
  }

  render() {
    return(
      <section className="sign-in-sign-out">
        <div>User</div>
        <button type="button" id="signinButton" onClick={this.signIn}>Sign-In</button>
        <button type="button" id="signoutButton" onClick={this.signOut}>Sign-Out</button>
        <div id="display-user-name">{
          this.props.user ? this.props.user.displayName : "Guest"
          }</div>
      </section>
    )
  }
}


export default User;
