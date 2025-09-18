import { useState, useEffect, useRef } from "react";
import "./crew.css";
import data from "../../data.json";
import NavBar from "../../components/navBar/navBar";

const Crew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const startXRef = useRef(0);
  const endXRef = useRef(0);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.crew.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    resetInterval();
  };

  const handleTounchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = startXRef.current - endXRef.current;
    // se arrastar mais de 50px, troca de slide
    if (Math.abs(diff) > 50) {
      // arrastou para esquerda
      if (diff > 0) {
        setActiveIndex((prev) =>
          prev === data.crew.length - 1 ? 0 : prev + 1
        );
        // arrastou para direita
      } else {
        setActiveIndex((prev) =>
          prev === 0 ? data.crew.length - 1 : prev - 1
        );
      }
      resetInterval();
    }
    startXRef.current = 0;
    endXRef.current = 0;
  };

  return (
    <div id="crew">
      <NavBar />
      <section id="section-crew">
        <p>02 MEET YOUR CREW</p>

        <div
          id="carousel-container"
          onTouchStart={handleTounchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            id="slides"
            style={{ transform: `translateX(-${activeIndex * 25}%)` }}
          >
            {data.crew.map((item, index) => (
              <div className="slide">
                <div className="slide-image" key={index}>
                  <img src={item.images.png} alt={item.name} />
                </div>
                <div className="slide-info">
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