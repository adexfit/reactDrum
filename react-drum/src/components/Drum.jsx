import React, { useState } from "react";
import Heater1 from "../assets/Heater-1.mp3";

const Drum = () => {
  const [soundName, setSoundname] = useState("Display");

  const soundQ = () => {
    let qSound = document.getElementById("Q");
    qSound.play();
    setSoundname((pre) => (pre = "Heater 1"));
  };
  const soundW = () => {
    let wSound = document.getElementById("W");
    wSound.play();
    setSoundname((pre) => (pre = "Heater 2"));
  };
  const soundE = () => {
    let eSound = document.getElementById("E");
    eSound.play();
    setSoundname((pre) => (pre = "Heater 3"));
  };
  const soundA = () => {
    let aSound = document.getElementById("A");
    aSound.play();
    setSoundname((pre) => (pre = "Heater 4"));
  };
  const soundS = () => {
    let sSound = document.getElementById("S");
    sSound.play();
    setSoundname((pre) => (pre = "Clap"));
  };
  const soundD = () => {
    let dSound = document.getElementById("D");
    dSound.play();
    setSoundname((pre) => (pre = "Open HH"));
  };
  const soundZ = () => {
    let zSound = document.getElementById("Z");
    zSound.play();
    setSoundname((pre) => (pre = "Kic_n_Hat"));
  };
  const soundX = () => {
    let xSound = document.getElementById("X");
    xSound.play();
    setSoundname((pre) => (pre = "Kick"));
  };
  const soundC = () => {
    let cSound = document.getElementById("C");
    cSound.play();
    setSoundname((pre) => (pre = "Closed HH"));
  };
  return (
    <main className="main__card" id="drum-machine">
      <div className="beatcard">
        <div className="drum-pad" onClick={soundQ} id="Heater 1">
          Q
          <audio
            preload="auto"
            src={Heater1}
            type="audio/mpeg"
            className="clip"
            id="Q"
          />
        </div>
        <div className="drum-pad" onClick={soundW} id="Heater 2">
          W
          <audio
            preload="auto"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
            type="audio/mpeg"
            className="clip"
            id="W"
          />
        </div>
        <div className="drum-pad" onClick={soundE} id="Heater 3">
          E
          <audio
            preload="auto"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
            type="audio/mpeg"
            className="clip"
            id="E"
          />
        </div>
        <div className="drum-pad" onClick={soundA} id="Heater 4">
          A
          <audio
            preload="auto"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
            type="audio/mpeg"
            className="clip"
            id="A"
          />
        </div>
        <div className="drum-pad" onClick={soundS} id="clap">
          S
          <audio
            preload="auto"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
            type="audio/mpeg"
            className="clip"
            id="S"
          />
        </div>
        <div className="drum-pad" onClick={soundD} id="Open HH">
          D
          <audio
            preload="auto"
            type="audio/mpeg"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
            className="clip"
            id="D"
          />
        </div>
        <div className="drum-pad" onClick={soundZ} id="Kic_n_Hat">
          Z
          <audio
            preload="auto"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
            type="audio/mpeg"
            className="clip"
            id="Z"
          />
        </div>
        <div className="drum-pad" onClick={soundX} id="Kick">
          X
          <audio
            preload="auto"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
            type="audio/mpeg"
            className="clip"
            id="X"
          />
        </div>
        <div className="drum-pad" onClick={soundC} id="Closed HH">
          C
          <audio
            preload="auto"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
            type="audio/mpeg"
            className="clip"
            id="C"
          />
        </div>
      </div>
      <div className="control__panel">
        {/* <div className="power">
          <p className="control__label">Power</p>
          <label className="switch">
            <input
              type="checkbox"
              defaultChecked
              id="powerCheck"
              onClick={powerHandle}
            />
            <span className="slider"></span>
          </label>
        </div> */}
        <div className="display" id="display">
          {soundName}
        </div>

        {/* <div className="slidecontainer">
          <p className="control__label">Slider</p>
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="sliderVol"
            id="myRange"
          />
        </div> */}
        {/* </div> */}
        {/* <div>
          <p className="control__label">Bank</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div> */}
      </div>
    </main>
  );
};

export default Drum;
