import React from 'react';

const CalculatorButton = ({ value, onClick }) => {
  return (
    <div>
      <button 
      className='MainButton'
      value={value} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default CalculatorButton;
