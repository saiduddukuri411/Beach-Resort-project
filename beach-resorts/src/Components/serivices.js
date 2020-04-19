import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class serivices extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Every Indiviual are complemented with 5 cocktails, Every night",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Enjoy endless Hiking",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "Free pickup and dropping assigned, with in 5kms range",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Every Indiviual are complemented with 3 strong beers",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((items, index) => {
            return (
              <article key={index} className="service">
                <span>{items.icon}</span>
                <h6>{items.title}</h6>
                <p>{items.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
