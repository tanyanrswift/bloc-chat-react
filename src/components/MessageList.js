import React, {Component} from 'react';

class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state= {
      messages:''
    }

    this.messagesRef = this.props.firebase.database().ref('messages');
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({ messages: this.state.messages.concat( message ) })
    });
  }

  render() {
    return (
      <section className='message-list'>
        this.state.messages.map( (messages) =>
        <h4 id="message"> {messages.content}</h4>
        )
        <div>Message List</div>
      </section>
    )
  }
}

export default MessageList;
