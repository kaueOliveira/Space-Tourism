import { useState, useEffect, useRef } from "react";
import "./crew.css";
import data from "../../data.json";
import NavBar from "../../components/navBar/navBar";

const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.crew.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  }

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  }

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    resetInterval();
  }

  return (
    <div id="crew">
      <NavBar />
      <section id="section-crew">
        <p>02 MEET YOUR CREW</p>

        <div id="carousel-container">
          <div
            id="slides"
            style={{ transform: `translateX(-${activeIndex * 25}%)` }}
          >
            {data.crew.map((item, index) => (
              <div className="slide">
                <div className="slide-image" key={index}>
                  <img src={item.images.png} alt={item.name} />
                </div>
                <div>
                  <h2>{item.role}</h2>
                  <h1>{item.name}</h1>
                  <p>{item.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="dots">
          {data.crew.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Crew;
// deslizar no mobile
// resetar setinterval