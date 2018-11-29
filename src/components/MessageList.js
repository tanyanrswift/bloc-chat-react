import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
  }

=======

    this.state= {
      messages: []
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

  render() {
    console.log(this.state.messages);
    return (
      <section className='message-list'>
        {this.state.messages.filter(
          (message) => {
            return (this.props.activeRoom.key === message.roomId);
        }).map( (message) =>
          <div>
            <h4 id="message"> {message.content}</h4>
          </div>
        )}
      </section>
    )
  }
>>>>>>> bloc-chat-react-list-messages
}

export default MessageList;
