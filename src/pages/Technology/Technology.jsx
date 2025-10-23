import { useState, useEffect } from "react";
import data from "../../data.json";
import "./technology.css";
import NavBar from "../../components/NavBar_test/NavBar_test";

const Tecnology = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [fade, setFade] = useState(true);

  const currentDestination = data.technology[selectedIndex];

  const handleClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setSelectedIndex(index);
      setFade(true);
    }, 450);
  };

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="tecnology">
      <NavBar />
      <section id="section-technology">
        <p>
          <span>03</span> SPACE LUNCH 101
        </p>
        <img
          src={
            windowSize > 1024
              ? currentDestination.images.portrait
              : currentDestination.images.landscape
          }
          alt={currentDestination.name}
          className={fade ? "fade-in" : "fade-out"}
        />
        <div id="tec-buttons">
          {data.technology.map((item, index) => (
            <span
              key={item.name}
              onClick={() => handleClick(index)}
              className={selectedIndex === index ? "active" : ""}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <div id="tec-info">
          <h2>THE TERMINOLOGY...</h2>
          <h1 className={fade ? "fade-in" : "fade-out"}>
            {currentDestination.name}
          </h1>
          <p id="description" className={fade ? "fade-in" : "fade-out"}>
            {currentDestination.description}{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Tecnology;
// Escrito errado
