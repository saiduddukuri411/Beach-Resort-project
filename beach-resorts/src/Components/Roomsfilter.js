import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../Components/Title";

//get all unique values

const getUniquevalues = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function Roomsfilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  let types = getUniquevalues(rooms, "type");
  let people = getUniquevalues(rooms, "capacity");
  people = people.map((people, index) => {
    return (
      <option key={index} value={people}>
        {people}
      </option>
    );
  });
  types = ["all", ...types];
  types = types.map((type, index) => {
    return (
      <option key={index} value={type}>
        {type}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of select type */}
      </form>
    </section>
  );
}
