import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <div>
      <button className='Button' value={value} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
