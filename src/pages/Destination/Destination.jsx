import { useState } from "react";
import data from "../../data.json";
import "./destination.css";
import NavBar from "../../components/navBar/navBar";

const Destination = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const currentDestination = data.destinations[selectedIndex];

  const handleClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setSelectedIndex(index);
      setFade(true);
    }, 450);
  };

  return (
    <div id="destination">
      <NavBar />
      <section id="section-destination">
        <p>
          <span>01</span>PICK YOUR DESTINATION
        </p>
        <img
          src={currentDestination.images.png}
          alt={currentDestination.name}
          className={fade ? "fade-in" : "fade-out"}
        />
        <ul id="ul-destination">
          {data.destinations.map((destination, index) => (
            <li
              key={destination.name}
              onClick={() => handleClick(index)}
              className={selectedIndex === index ? "active" : ""}
            >
              {destination.name.toUpperCase()}
            </li>
          ))}
        </ul>
        <div id="info-destination">
          <h1 className={fade ? "fade-in" : "fade-out"}>
            {currentDestination.name}
          </h1>
          <p className={fade ? "fade-in" : "fade-out"}>
            {currentDestination.description}
          </p>
          <div id="distance" className={fade ? "fade-in" : "fade-out"}>
            <span>AVG. DISTANCE</span>
            <p>{currentDestination.distance}</p>
          </div>
          <div id="time-travel" className={fade ? "fade-in" : "fade-out"}>
            <span>EST. TRAVEL TIME</span>
            <p>{currentDestination.travel}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
