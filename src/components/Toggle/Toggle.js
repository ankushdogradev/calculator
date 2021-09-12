// https://github.com/pitstop260/calculator-app-akshay-koti/blob/main/index.html
// https://pitstop260.github.io/calculator-app-akshay-koti/
// https://www.youtube.com/watch?v=RiWxhm5ZdFM&t=1383s

import React from "react";
import "./Toggle.scss";

const Toggle = () => {
  return (
    <>
      <div className="togl">
        {/* <div className="togl__num">
          <p for="one">1</p>
          <p for="two">2</p>
          <p for="three">3</p>
        </div> */}

        <div className="togl__slider">
          {/* labels */}
          <div className="togl__slider__labels">
            <label for="toggle1">1</label>
            <label for="toggle2">2</label>
            <label for="toggle3">3</label>
          </div>

          {/* inputs */}
          <div className="togl__slider__inputs">
            <input type="checkbox" name="toggle1" id="toggle1" checked />
            <input type="checkbox" name="toggle2" id="toggle2" />
            <input type="checkbox" name="toggle3" id="toggle3" />
            <div className="togl__slider__inputs__dot-container">
              <div className="togl__slider__inputs__dot-container__dot"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toggle;
