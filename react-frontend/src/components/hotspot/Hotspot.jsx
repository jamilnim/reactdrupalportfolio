import React from "react";
import hotsportbackground from "../../assets/background/hotsportbackground.jpg";
import hotspotpic from "../../assets/background/blinking_lights.gif";
import "./Hotspot.css";
import logo from "../../assets/background/logo.png";
import MediaButton from "./MediaButton"

function Hotsports() {
  return (
    <>
      <div className="hotsport-container">
        <div className="hotsportpic">
          <img src={hotspotpic} alt="Hotspot" />
        </div>
        ´
        <div className="hotsporttext">
          <div className="heading">
            I am here to meet your digital || vision ||
          </div>
          <div className="Btncontainer">
           
              <button className="hotspotButton">
                {/* hero button 1 */}
                <div className="bubble-layer bubble-1"></div>
                <div className="bubble-layer bubble-2"></div>
                <div className="bubble-layer bubble-3"></div>
                <div className="bubble-layer bubble-4"></div>
                <div className="bubble-layer bubble-5"></div>
                <div className="bubble-layer bubble-6"></div>
                <div className="bubble-layer bubble-7"></div>
                <a
              href="/cv/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >   Download CV
            </a>
              </button>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotsports;
