import './style.css';
import { useState } from 'react';

const LightBulb = ({ light, changeLight }) => {
  return (
    <div className={`container ${light && 'night'}`}>
      <div className="bulb-light" onClick={changeLight}>
        <div id="light" />
        <div id="bulb">
          <div className="bulb-top">
            <div className="reflection" />
          </div>
          <div className="bulb-middle-1" />
          <div className="bulb-middle-2" />
          <div className="bulb-middle-3" />
          <div className="bulb-bottom" />
        </div>

        <div id="base">
          <div className="screw-top" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-a" />
          <div className="screw-b" />
          <div className="screw-c" />
          <div className="screw-d" />
        </div>
      </div>
    </div >
  );
};

const App = () => {

  const [light, setLight] = useState(false);

  return (
    <>
      <button onClick={() => setLight((curr) => !curr)}>Switch</button>
      <LightBulb light={light} changeLight={() => setLight((curr) => !curr)} />
    </>
  );
};

export default App;
