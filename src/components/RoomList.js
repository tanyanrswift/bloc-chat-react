import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
      newRoomName: '',
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
    e.preventDefault();
    e.target.reset();
    const newRoomName = this.state.newRoomName
    this.roomsRef.push({
      name: this.state.newRoomName
    });
  }

  handleSubmitClick(e) {
    this.setState({ newRoomName : e.target.value });
  }

  render() {
    return(
      <section className="room-list-elements">
      <section className="room-list">
        <div>
          <h2 id="room-list-title>">Bloc Chat</h2>
        </div>
        <div className="rooms">
        {
          this.state.rooms.map( (room) =>
          <h3 id="room" onClick={ () => this.props.handleRoomClick(room)}>{room.name}</h3>
          )
        }
        </div>
      </section>
      <section>
          <form className="form-create-room" onSubmit={this.createNewRoom.bind(this)}>
            <label htmlFor="textarea">Create Room</label>
            <br />
            <input type="text" id="textarea" onChange={this.handleSubmitClick.bind(this)} />
            <br />
            <input type="submit" id="submitButton" />
          </form>
      </section>
      </section>
    );
  }
}

export default RoomList;
