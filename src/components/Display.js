/* eslint-disable no-eval */
import React, { useState } from "react";
import Button from "./Button";
import "./Display.css";
import CalculatorButton from "./Button";

const Display = () => {
  const [val, setVal] = useState("");
  const [memo, setMemo] = useState(0);

  const backspace = () => {
    try {
      setVal(val.slice(0, -1));
    } catch (error) {
      setVal("");
    }
  };

  const calculate = () => {
    try {
      setVal(eval(val));
    } catch (error) {
      setVal("error");
    }
  };

  const handleButtonClick = (e) => {
    setVal(val + e.target.value);
  };

  const memoClear = () => {
    setMemo(0);
  };

  const memoRecall = () => {
    setVal(memo.toString());
  };

  const memoAdd = () => {
    const n = parseFloat(val);
    setMemo(memo + n);
  };

  const memoSub = () => {
    const n = parseFloat(val);
    setMemo(memo - n);
  };

  return (
    <div className="App">
      <div>
        <div>
          <div>
            <h1>CALCULADORA</h1>
            <h2 className="name">THE APP WITHOUT FEAR</h2>
            <hr />
          </div>
        </div>
        <div>
          <div>
            <div>
              <div>
                <input
                  type="text"
                  value={val}
                  onChange={(e) => setVal(e.target.value)}
                />
              </div>
              <div className="ButtonContainer">
                <div className="MButton">
                  <CalculatorButton value="MC" onClick={memoClear} />
                  <CalculatorButton value="MR" onClick={memoRecall} />
                  <CalculatorButton value="M+" onClick={memoAdd} />
                  <CalculatorButton value="M-" onClick={memoSub} />
                </div>
              </div>
              <div className="ButtonContainer">
                <div className="MButton">
                  <CalculatorButton value="1" onClick={handleButtonClick} />
                  <CalculatorButton value="2" onClick={handleButtonClick} />
                  <CalculatorButton value="3" onClick={handleButtonClick} />
                </div>
              </div>
              <div className="ButtonContainer">
                <div className="MButton">
                  <CalculatorButton value="4" onClick={handleButtonClick} />
                  <CalculatorButton value="5" onClick={handleButtonClick} />
                  <CalculatorButton value="6" onClick={handleButtonClick} />
                </div>
              </div>
              <div className="ButtonContainer">
                <div className="MButton">
                  <CalculatorButton value="7" onClick={handleButtonClick} />
                  <CalculatorButton value="8" onClick={handleButtonClick} />
                  <CalculatorButton value="9" onClick={handleButtonClick} />
                </div>
              </div>
              <div className="ButtonContainer">
                <div className="OpButton">
                  <CalculatorButton value="+" onClick={handleButtonClick} />
                  <CalculatorButton value="*" onClick={handleButtonClick} />
                  <CalculatorButton value="." onClick={handleButtonClick} />
                  <CalculatorButton value="/" onClick={handleButtonClick} />
                </div>
              </div>
              <div className="ButtonContainer">
                <div className="MButton">
                  <CalculatorButton value="0" onClick={handleButtonClick} />
                </div>
                <div className="OpButton">
                  <CalculatorButton value="C" onClick={backspace} />
                  <CalculatorButton value="-" onClick={handleButtonClick} />
                  <CalculatorButton value="=" onClick={calculate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
