import React, { useState } from "react";
import "./destination.css";
import moon from "../../img/image-moon.png";
import mars from "../../img/image-mars.png";
import europa from "../../img/image-europa.png";
import titan from "../../img/image-titan.png";
import { Button } from "react-bootstrap";

export default function Destination() {
  const destinations = [
    {
      id: 1,
      name: "MOON",
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2and Apollo 11 landing sites.`,
      distance: "384,400 km",
      travelTime: "3 days",
      img: moon,
    },
    {
      id: 2,
      name: "MARS",
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
      distance: "225 MIL. km",
      travelTime: "9 months",
      img: mars,
    },
    {
      id: 3,
      name: "EUROPA",
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
      distance: "628 MIL. km",
      travelTime: "3 years",
      img: europa,
    },
    {
      id: 4,
      name: "TITAN",
      description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
      distance: "1.6 BIL. km",
      travelTime: "7 years",
      img: titan,
    },
  ];
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  function changeDestination(id) {
    setSelectedDestination(destinations[id - 1]);
  }

  return (
    <>
      <div className="destination-bg ">
        <div className="container-2">
          <div className=" d-flex align-items-center justify-content-center">
            <div className="pic">
              <p className="pick" style={{ fontSize: "22px" }}>
                <span className="text-muted" style={{ marginRight: "28px" }}>
                  01
                </span>
                PICK YOUR DESTINATION
              </p>
              <img
                src={selectedDestination.img}
                id="destination-picc"
                alt="Moon"
              />
            </div>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <div className="description">
              <div className="btns">
                <Button
                  className="btn"
                  variant="outline-secondary"
                  style={{ color: "white" }}
                  onClick={() => changeDestination(1)}
                >
                  MOON
                </Button>
                <Button
                  className="btn"
                  variant="outline-secondary"
                  style={{ color: "white" }}
                  onClick={() => changeDestination(2)}
                >
                  MARS
                </Button>
                <Button
                  className="btn"
                  variant="outline-secondary"
                  style={{ color: "white" }}
                  onClick={() => changeDestination(3)}
                >
                  EUROPA
                </Button>
                <Button
                  className="btn"
                  variant="outline-secondary"
                  style={{ color: "white" }}
                  onClick={() => changeDestination(4)}
                >
                  TITAN
                </Button>
              </div>
              <h1 style={{ fontSize: "73px" }}>{selectedDestination.name}</h1>
              <p
                style={{
                  marginTop: "53px",
                  fontSize: "18px",
                  color: "#D0D6F9",
                }}
              >
                {selectedDestination.description}
              </p>
              <div className="d-flex travel" style={{ marginTop: "92px" }}>
                <div style={{ marginRight: "125px" }}>
                  <p>AVG. DISTANCE</p>
                  <p style={{ fontSize: "22px" }}>
                    {selectedDestination.distance}
                  </p>
                </div>
                <div>
                  <p>Est. travel time</p>
                  <p style={{ fontSize: "22px" }}>
                    {selectedDestination.travelTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
