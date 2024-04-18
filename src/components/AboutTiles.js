import React, { useEffect } from "react";
import "../Styles/About_Tiles.css";
import LC from "../assets/LC_cnt.png";
import MERN from "../assets/MERN.png";
import AWS from "../assets/AWS.png";
import Next from "../assets/Next.png";
import tech from "../assets/teck.png";
import CloseIcon from "@mui/icons-material/Close";

function AboutTiles({ setButtonVisible }) {
  useEffect(() => {
    setTimeout(() => {
      var iconDiv = document.getElementById("red-icon-tiles");
      iconDiv.style.display = "flex";
    }, 2000);
  }, []);
  return (
    <>
      <div className="about-tiles-wrapper">
        <div
          className="red-icon-tiles"
          id="red-icon-tiles"
          onClick={() => setButtonVisible(true)}
        >
          <CloseIcon fontSize="small" sx={{ color: "black" }} />
        </div>
        <ul className="tiles-ul" id="list">
          <li class="leaf">Software Engineer</li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                UC Irvine
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                Master, CS
              </p>
            </div>
          </li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                DA-IICT
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                Bachelor, CS
              </p>
            </div>
          </li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                Percussionist{" "}
                <span style={{ fontSize: "larger", marginLeft: "2px" }}>
                  {" "}
                  🥁
                </span>
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                Drums, Cajon
              </p>
            </div>
          </li>
          <li class="leaf">
            <div className="leaf-flex">
              <p className="line-wrap-section" style={{ alignItems: "start" }}>
                Research Experience
              </p>
              <p
                className="line-wrap-section"
                style={{ alignItems: "end", marginTop: "25px" }}
              >
                ML/AI/HPC/Finance
              </p>
            </div>
          </li>
          <li class="leaf">
            {/* <img src={MERN} style={{ width: '40%', marginRight: '5px', borderRadius: '5px' }} /> */}
            <img
              src={tech}
              style={{
                width: "96%",
                borderRadius: "5px",
                verticalAlign: "middle",
              }}
            />
            {/* <img src={AWS} style={{ width: '30%', borderRadius: '50%' }} /> */}
          </li>
          <li class="leaf">
            <img
              style={{
                width: "70%",
                borderRadius: "5px",
                verticalAlign: "middle",
              }}
              src={LC}
            />
          </li>
          {/* <li class="leaf">I'm list 8</li> */}
          {/* <li class="leaf">I'm list 9</li> */}
        </ul>
      </div>
    </>
  );
}

export default AboutTiles;
