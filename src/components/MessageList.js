import React, {Component} from 'react';
import './MessageList.css';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state= {
      messages: [],
      newMessageName: ''
    }

    this.messagesRef = this.props.firebase.database().ref('Messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  createNewMessage(e) {
    e.preventDefault();
    e.target.reset();
    if (this.props.activeRoom) {
        const newMessage = this.state.newMessageName
        this.messagesRef.push({
          content: this.state.newMessageName,
          roomId: this.props.activeRoom.key,
          username: this.props.user ? this.props.user.displayName : "Guest"
        })
      } else {
        return ("Please select a room");
      }
  }

  handleSubmitClick(e) {
    console.log("in handle submit");
    console.log(e.target.value);
    this.setState({ newMessageName : e.target.value })
  }

  render() {
    return (
      <section>
        <section className='message-list'>
          {this.state.messages.filter(
            (message) => {
              return (this.props.activeRoom.key === message.roomId);
            }).map( (message, index) =>
            <div key={index}>
              <h4 id="username">{message.username}</h4>
              <h4 id="message">{message.content}</h4>
              </div>
            )}
          </section>
          <section>
            <form className="form-create-message" onSubmit={this.createNewMessage.bind(this)}>
            <label htmlFor="textarea">Write new message here</label>
            <br />
            <input type="text" id="textarea" onChange={this.handleSubmitClick.bind(this)} />
            <br />
            <input type="submit" id="submitButton" />
            </form>
          </section>
      </section>
    )
  }
}

export default MessageList;
