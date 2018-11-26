import React, {Component} from 'react';

class RoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: []
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

  render() {
    return(
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
    );
  }
}

export default RoomList;
