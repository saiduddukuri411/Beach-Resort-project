import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import Services from "../Components/serivices";
import FeturedRooms from "../Components/FeaturedRooms";
import FeaturedRooms from "../Components/FeaturedRooms";


const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="luxirious rooms" subtitle="delux rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
