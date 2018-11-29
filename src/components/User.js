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
        <button type="button" id="signinButton" onClick={this.props.firebase.auth().signInWithPopup( new this.props.firebase.auth.GoogleAuthProvider())}>Sign-In</button>
        <button type="button" id="signoutButton" onClick={this.props.firebase.auth().signOut()}>Sign-Out</button>
        <div id="display-user-name">{
          if (this.props.displayName === null) {
            return('Guest');
          } else {
            return (this.props.displayName);
            }
          }</div>
      </section>
    )
  }
}


export default User;
