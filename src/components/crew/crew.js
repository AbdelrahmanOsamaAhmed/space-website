import React, { useState } from "react";
import moon from "../../img/image-douglas-hurley.png";
import mars from "../../img/image-mark-shuttleworth.png";
import europa from "../../img/image-victor-glover.png";
import titan from "../../img/image-anousheh-ansari.png";
import { Button } from "react-bootstrap";
import "./crew.css";

export default function Crew() {
  const crew = [
    {
      id: 1,
      name: "Douglas Hurley",
      description: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`,
      img: moon,
      job: "Commander",
    },
    {
      id: 2,
      name: "MARK SHUTTLEWORTH",
      description: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
      img: mars,
      job: "Mission Specialist",
    },
    {
      id: 3,
      name: "Victor Glover",
      description: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
      img: europa,
      job: "PILOT",
    },
    {
      id: 4,
      name: "Anousheh Ansari",
      description: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
      img: titan,
      job: "Flight Engineer",
    },
  ];
  const [selectedCrew, setSelectedCrew] = useState(crew[0]);

  function changeCrew(id) {
    setSelectedCrew(crew[id - 1]);
  }

  return (
    <div className="destination-bg " id="crew-bg">
      <div className="container-2" id="crew-container">
        <div className=" d-flex align-items-center justify-content-center">
          <div
            className="description"
            style={{ marginTop: "200px", textAlign: "left" }}
          >
            <p style={{ fontSize: "22px" }}>
              <span className="text-muted" style={{ marginRight: "28px" }}>
                02
              </span>
              MEET YOUR CREW
            </p>
            <h1>{selectedCrew.job}</h1>
            <h1 className="crew-name">{selectedCrew.name}</h1>
            <p
              style={{ marginTop: "53px", fontSize: "18px", color: "#D0D6F9" }}
            >
              {selectedCrew.description}
            </p>
            <div className="btns">
              <Button
                className="btn"
                variant="outline-secondary"
                style={{ borderRadius: "50%" ,color:"white"}}
                onClick={() => changeCrew(1)}
              >
                1
              </Button>
              <Button
                className="btn"
                variant="outline-secondary"
                style={{ borderRadius: "50%" ,color:"white"}}
                onClick={() => changeCrew(2)}
              >
                2
              </Button>
              <Button
                className="btn"
                variant="outline-secondary"
                style={{ borderRadius: "50%" ,color:"white"}}
                onClick={() => changeCrew(3)}
              >
                3
              </Button>
              <Button
                className="btn"
                variant="outline-secondary"
                style={{ borderRadius: "50%" ,color:"white"}}
                onClick={() => changeCrew(4)}
              >
                4
              </Button>
            </div>

            {/* <div className="d-flex travel" style={{ marginTop: "92px" }}>
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
            </div> */}
          </div>
        </div>
        <div className=" d-flex align-items-end justify-content-center">
          <div className="">
            <img src={selectedCrew.img} id="crew-pic" alt="Moon" />
          </div>
        </div>
      </div>
    </div>
  );
}
