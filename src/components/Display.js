/* eslint-disable no-eval */
import React, { useState } from "react";
import Button from "./Button";
import "./Display.css";

const Display = () => {
  const [val, setVal] = useState("");

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

  return (
    <div>
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
                  <Button value="MC" />
                  <Button value="MR" />
                  <Button value="M+" />
                  <Button value="M-" />
                </div>
              </div>
              <div className="ButtonContainer">
                <div className="MainButton">
                <Button value="1" onClick={handleButtonClick} />
                <Button value="2" onClick={handleButtonClick} />
                <Button value="3" onClick={handleButtonClick} />
              </div>    
            </div>
            <div className="ButtonContainer">
                <div className="MainButton">
                <Button value="4" onClick={handleButtonClick} />
                <Button value="5" onClick={handleButtonClick} />
                <Button value="6" onClick={handleButtonClick} />
              </div>    
            </div>
            <div className="ButtonContainer">
               <div className="MainButton">
                <Button value="7" onClick={handleButtonClick} />
                <Button value="8" onClick={handleButtonClick} />
                <Button value="9" onClick={handleButtonClick} />
              </div>     
            </div>
            <div className="ButtonContainer">
            <div className="OpButton">
                <Button value="+" onClick={handleButtonClick} />
                <Button value="*" onClick={handleButtonClick} />
                <Button value="." onClick={handleButtonClick} />
                <Button value="/" onClick={handleButtonClick} />
                </div>    
            </div>
            <div className="ButtonContainer">
               <div className="MainButton">
                <Button value="0" onClick={handleButtonClick} />
              </div>
              <div className="OpButton">
                <Button value="C" onClick={backspace} />
                <Button value="-" onClick={handleButtonClick} />
                <Button value="=" onClick={calculate} />
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
