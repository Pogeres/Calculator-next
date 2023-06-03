"use client";

import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");
  const [placeholder, setPlaceHolder] = useState("0");

  const hadleClick = (e) => {
    setResult(result.concat(e.target.name));
    setPlaceHolder("0");
  };

  const clear = () => {
    setResult("");
    setPlaceHolder("0");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
    setPlaceHolder("0");
  };

  const caculate = () => {
    try {
      setResult(eval(result).toString());
      setPlaceHolder("0");
    } catch (err) {
      if (result == "") {
        setPlaceHolder("0");
      } else {
        setResult("");
        setPlaceHolder("ERROR");
      }
    }
  };

  function percetual(): any {
    if (result == "") {
      setPlaceHolder("0");
    } else {
      try {
        setResult((eval(result) / 100).toString());
        setPlaceHolder("0");
      } catch (err) {
        setResult("");
        setPlaceHolder("ERROR");
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary-content">
      <div className="card w-96 bg-secondary rounded-3xl drop-shadow-2xl">
        <figure className="p-8 pb-2">
          <input
            type="text"
            placeholder={placeholder}
            className="input input-lg w-full max-w-xs rounded-lg text-end"
            value={result}
          />
        </figure>
        <div className="card-body">
          <div className="grid grid-cols-4 gap-4 font-mono" id="btn-cal">
            <button
              className="btn btn-square bg-warning hover:bg-primary hover:text-base-100"
              onClick={clear}
              id="clear"
            >
              CLEAR
            </button>
            <button
              className="btn btn-square bg-warning hover:bg-primary hover:text-base-100"
              onClick={backspace}
              id="backspace"
            >
              C
            </button>
            <button
              className="btn btn-square bg-success hover:bg-primary hover:text-base-100"
              onClick={percetual}
              id="%"
            >
              %
            </button>
            <button
              className="btn btn-square bg-success hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="/"
            >
              &divide;
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="7"
            >
              7
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="8"
            >
              8
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="9"
            >
              9
            </button>
            <button
              className="btn btn-square bg-success hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="*"
            >
              &times;
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="4"
            >
              4
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="5"
            >
              5
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="6"
            >
              6
            </button>
            <button
              className="btn btn-square bg-success hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="+"
            >
              +
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="1"
            >
              1
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="2"
            >
              2
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="3"
            >
              3
            </button>
            <button
              className="btn btn-square bg-success hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="-"
            >
              -
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="0"
            >
              0
            </button>
            <button
              className="btn btn-square hover:bg-primary hover:text-base-100"
              onClick={hadleClick}
              name="."
            >
              .
            </button>
            <button
              className="btn bg-info hover:bg-primary col-span-2 mr-5 hover:text-base-100"
              onClick={caculate}
              id="equals"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
