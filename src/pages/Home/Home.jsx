import "./home.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <NavBar />
        <section id="section-home">
          <div id="home-infos">
            <p>SO, YOU WANT TO TRAVEL TO</p>
            <h1>SPACE</h1>
            <p>
              Let's face it; If you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link to="/destination" id="button">
            <button>EXPLORE</button>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;
// Btn Ainda n leva a lugar algum.
