import React, { useState, useEffect } from "react";
import Toggle from "../Toggle/Toggle";

import "./Body.scss";

const Body = () => {
  const [data, setData] = useState("");

  return (
    <>
      <div className="main ">
        <div className="main__head">
          <h1 className="main__head__title">Calc</h1>
          <div className="main__head__theme">
            <h4 className="main__head__theme__sub-title">THEME</h4>
            {/* <Toggle /> */}
          </div>
        </div>
        <div className="main__container">
          <div className="main__container__scr">
            <div data-prev-operand className="main__container__scr__num">
              {data}
            </div>
          </div>
          <div className="main__container__numpad">
            <button
              value={7}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              7
            </button>
            <button
              value={8}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              8
            </button>
            <button
              value={9}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              9
            </button>
            <button
              value={"DEL"}
              className="main__container__numpad__btn sqr clr"
              onClick={() => {
                setData(data.substr(0, data.length - 1));
              }}
            >
              DEL
            </button>
            <button
              value={4}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              4
            </button>
            <button
              value={5}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              5
            </button>
            <button
              value={6}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              6
            </button>
            <button
              value={"+"}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              +
            </button>
            <button
              value={1}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              1
            </button>
            <button
              value={2}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              2
            </button>
            <button
              value={3}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              3
            </button>
            <button
              value={"-"}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              -
            </button>
            <button
              value={"."}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              .
            </button>
            <button
              value={0}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              0
            </button>
            <button
              value={"/"}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              /
            </button>
            <button
              value={"*"}
              className="main__container__numpad__btn sqr"
              onClick={(e) => {
                setData(data + e.target.value);
              }}
            >
              *
            </button>
            <button
              className="main__container__numpad__btn sqr rec clr"
              onClick={() => setData("")}
            >
              RESET
            </button>
            <button
              value={"="}
              className="main__container__numpad__btn sqr rec eql "
              onClick={(e) => {
                try {
                  setData(
                    String(eval(data)).length > 3 &&
                      String(eval(data)).includes(".")
                      ? String(eval(data).toFixed(4))
                      : String(eval(data))
                  );
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
