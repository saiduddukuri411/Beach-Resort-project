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

        {/* Rangebar filter */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        {/* end of rangebar filter */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extrass */}
        <div className="form-group">
          <div className="single-extra">
            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
            <label htmlFor="pets">pets</label>
          </div>

        </div>
        {/* extrass */}
      </form>
    </section>
  );
}
