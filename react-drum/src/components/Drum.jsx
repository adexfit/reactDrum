import React, { useState } from "react";

const Drum = () => {
  const [soundName, setSoundname] = useState("Display");

  const soundQ = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
    );
    setSoundname((pre) => (pre = "Heater 1"));
    audio.play();
  };
  const soundW = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
    );
    setSoundname((pre) => (pre = "Heater 2"));
    audio.play();
  };
  const soundE = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
    );
    setSoundname((pre) => (pre = "Heater 3"));
    audio.play();
  };
  const soundA = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
    );
    setSoundname((pre) => (pre = "Heater 4"));
    audio.play();
  };
  const soundS = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
    );
    setSoundname((pre) => (pre = "Clap"));
    audio.play();
  };
  const soundD = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
    );
    setSoundname((pre) => (pre = "Open HH"));
    audio.play();
  };
  const soundZ = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
    );
    setSoundname((pre) => (pre = "Kic_n_Hat"));
    audio.play();
  };
  const soundX = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
    );
    setSoundname((pre) => (pre = "Kick"));
    audio.play();
  };
  const soundC = () => {
    const audio = new Audio(
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
    );
    setSoundname((pre) => (pre = "Closed HH"));
    audio.play();
  };
  return (
    <main className="main__card" id="drum-machine">
      <div className="beatcard">
        <div className="drum-pad" onClick={soundQ}>
          Q
          <audio id="Q" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundW}>
          W
          <audio id="W" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundE}>
          E
          <audio id="E" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundA}>
          A
          <audio id="A" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundS}>
          S
          <audio id="S" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundD}>
          D
          <audio id="D" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundZ}>
          Z
          <audio id="Z" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundX}>
          X
          <audio id="X" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div className="drum-pad" onClick={soundC}>
          C
          <audio id="C" className="clip">
            <source src="horse.ogg" type="audio/ogg" />
            <source src="horse.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="control__panel">
        <div className="power">
          <p className="control__label">Power</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="display" id="display">
          {soundName}
        </div>

        <div className="slidecontainer">
          <p className="control__label">Slider</p>
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="sliderVol"
            id="myRange"
          />
        </div>
        {/* </div> */}
        <div>
          <p className="control__label">Bank</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </main>
  );
};

export default Drum;
