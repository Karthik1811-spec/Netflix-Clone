import React from "react";
import "./Home.css";
import Navbar from "../../componets/Navbar/Navbar";
import hero_banner from "../../assets/oppenheimer-2.jpg";
import hero_text from "../../assets/Oppenheimer-text.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titilecards from "../../componets/TitileCards/TitileCards";
import Footer from "../../componets/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero_caption">
          <img src={hero_text} alt="" className="caption-img" />
          <p>
            “Oppenheimer” tells the dramatic and intense true story of J. Robert
            Oppenheimer, the brilliant American physicist who led the
            development of the atomic bomb during World War II under the
            Manhattan Project.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <Titilecards />
        </div>
      </div>

      <div className="more-cards">
        <Titilecards title={"Blockbuster movies"} category={"top_rated"} />
        <Titilecards title={"Only on Netflix"} category={"popular"} />
        <Titilecards title={"Upcoming"} category={"upcoming"} />
        <Titilecards title={"Top picks for you"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
