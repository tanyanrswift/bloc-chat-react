import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newRoomName: '',
    };
  }

  createNewRoom(e) {
    e.preventDefault();
    this.props.createNewRoom(e);
  }

  handleSubmitClick(e) {
    this.setState({ newRoomName : e.target.value })
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
          this.props.rooms.map( (room) =>
          <h3
            key={room.key}
            id="room"
            onClick={ () => this.props.handleRoomClick(room)}
          >{room.name}</h3>
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
          <button onClick= { this.props.deleteRoom }>Delete Room</button>
      </section>
      </section>
    );
  }
}

export default RoomList;
