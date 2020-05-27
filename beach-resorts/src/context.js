import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(
      ...rooms.map((item) => {
        return item.price;
      })
    );
    let maxSize = Math.max(
      ...rooms.map((item) => {
        return item.size;
      })
    );
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }
  formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((item) => item.fields.file.url);
      let room = { ...item.fields, images, id };

      return room;
    });
    return tempItems;
  };
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };
  handleChange = (event) => {
    const target = event.target;
    const value =
      event.target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;
    let tempRooms = [...rooms];
    if (type != "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    tempRooms = tempRooms
      .filter((room) => room.capacity >= parseInt(capacity))
      .filter((rooms) => rooms.price <= parseInt(price))
      .filter((rooms)=>rooms.size>=parseInt(minSize) && rooms.size<=parseInt(maxSize));
    if(breakfast){
      tempRooms = tempRooms.filter((rooms)=>rooms.breakfast===true)
    }else{
      tempRooms = tempRooms.filter((rooms)=>rooms.breakfast===true ||rooms.breakfast===false )
    }
    if(pets){
      tempRooms = tempRooms.filter((rooms)=>rooms.pets===true)
    }else{
      tempRooms = tempRooms.filter((rooms)=>rooms.pets===true ||rooms.pets===false )
    }
    

    this.setState({ sortedRooms: tempRooms });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const Roomconsumer = RoomContext.Consumer;

const withRoomConsumer = (Component) => {
  return (props) => {
    return (
      <Roomconsumer>
        {(value) => <Component {...props} context={value} />}
      </Roomconsumer>
    );
  };
};

export { RoomProvider, Roomconsumer, RoomContext, withRoomConsumer };
