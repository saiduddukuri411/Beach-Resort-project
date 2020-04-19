import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./loading";
import Room from "./Room";
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { loading, featuredRooms: rooms } = this.context;

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {loading ? (
            <Loading />
          ) : (
            rooms.map((object) => {
              return <Room key={object.id} room={object} />;
            })
          )}
        </div>
      </section>
    );
  }
}
