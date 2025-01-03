import React from "react";

const Drum = () => {
  return (
    <main className="main__card">
      <div className="beatcard">
        <div className="beat">Q</div>
        <div className="beat">R</div>
        <div className="beat">Y</div>
        <div className="beat">U</div>
        <div className="beat">O</div>
        <div className="beat">P</div>
        <div className="beat">W</div>
        <div className="beat">E</div>
        <div className="beat">T</div>
      </div>
      <div className="control__panel">
        <div className="power">
          <p className="control__label">Power</p>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="display">Display</div>
        <div className="volumeDiv">
          <p className="control__label">Slider</p>
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              class="sliderVol"
              id="myRange"
            />
          </div>
        </div>
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
