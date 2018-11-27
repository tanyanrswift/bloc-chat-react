import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: ''
    };

    this.roomsRef = this.props.firebase.database().ref('rooms');
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({ rooms: this.state.rooms.concat( room ) })
    });
  }

  createNewRoom(e) {
    const newRoomName = this.state.newRoomName
    this.roomsRef.push({
      name: this.state.newRoomName
    });
  }

  handleSubmitClick(e) {
    this.setState({ newRoomName : e.target.value })
  }

  render() {
    return(
      <section>
      <section className="room-list">
        <h2 id="room-list-title>">Bloc Chat</h2>
        <div className="rooms">
        {
          this.state.rooms.map( (room) =>
          <h3 id="room">{room.name}</h3>
          )
        }
        </div>
      </section>
      <section>
          <form className="form-create-room" onSubmit={this.createNewRoom}>
            <label for="textarea">Create Room</label>
            <br />
            <input type="text" id="textarea" />
            <br />
            <input type="submit" id="submitButton" />
          </form>
      </section>
      </section>
    );
  }
}

export default RoomList;