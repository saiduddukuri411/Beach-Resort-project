import React from "react";
import Roomsfilter from "./Roomsfilter.js";
import Roomslist from "./Roomslist";
import {withRoomConsumer } from "../context";
import Loading from "../Components/loading";

const RoomsContainer=({context})=> {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
      }
      return (
        <>
          
          <Roomsfilter rooms={rooms} />
          <Roomslist rooms={sortedRooms} />
        </>
      );
}

export default withRoomConsumer(RoomsContainer)
