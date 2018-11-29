import React, {Component} from 'react';

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

  handleSignInClick(e) {
    this.setState({ displayName: e.target.value })
  }

  handleSignOutClick(e) {
    this.setState({ displayName: e.target.value})
  }

  render() {
    return(
      <section className="sign-in-sign-out">
        <div>User</div>
        <button type="button" id="signinButton" onClick={this.signIn}>Sign-In</button>
        <button type="button" id="signoutButton" onClick={this.props.firebase.auth().signOut()}>Sign-Out</button>
        <div id="display-user-name">{
          this.props.displayName ? this.props.displayName : "Guest"
            }
          }</div>
      </section>
    )
  }
}


export default User;
