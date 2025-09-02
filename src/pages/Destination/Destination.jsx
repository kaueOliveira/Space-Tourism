import { useState } from "react";
import data from "../../data.json";
import "./destination.css";

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
      <p>
        <span>01</span>PICK YOUR DESTINATION
      </p>
      <img
        src={currentDestination.images.png}
        alt={currentDestination.name}
        className={fade ? "fade-in" : "fade-out"}
      />
      <ul>
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
    </div>
  );
};

export default Destination;
