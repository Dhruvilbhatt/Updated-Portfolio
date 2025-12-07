import React, { useEffect, useState } from "react";
import LandImg from "../assets/Landing_Page.jpg";
import blurred_bg from "../assets/blurred-bg.webp";
import "../Styles/LandingPage.css";
import { Element } from "react-scroll";
import AboutTiles from "./AboutTiles";
import Terminal from "./Terminal";
import TerminalIcon from "@mui/icons-material/Terminal";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";

function LandingPage() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const [terminalVisible, setTerminalVisible] = useState(true);

  useEffect(() => {
    const spans = document.querySelectorAll(".flickering-text");

    spans.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, 2000);
    });
  }, []);

  const uiClick = () => {
    setButtonVisible(false);
    setTerminalVisible(false);
  };

  const terminalClick = () => {
    setButtonVisible(false);
    setTerminalVisible(true);
  };

  return (
    <div className="landing" id="Home" name="Home">
      <div className="landing-left">
        <div className="about-me">
          {buttonVisible ? (
            <>
              <div onClick={uiClick} className="custom-button-change">
                Try UI!
              </div>
              <div onClick={terminalClick} className="custom-button-change">
                for terminal freaks!
              </div>
            </>
          ) : terminalVisible ? (
            <Terminal setButtonVisible={setButtonVisible} />
          ) : (
            <AboutTiles setButtonVisible={setButtonVisible} />
          )}
        </div>
      </div>
      <div className="landing-right">
        <div className="hero-image-wrapper">
          <img src={LandImg} />
        </div>
        <div class="container1">
          <div class="container">
            <div class="box">
              <div class="title">
                <span class="block"></span>
                <h1>
                  DHRUVIL BHATT<span></span>
                </h1>
              </div>
              <div class="role">
                <div class="block"></div>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
