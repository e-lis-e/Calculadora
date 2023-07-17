import React from 'react';

const Button = ({ value, onClick }) => {
  return (
    <div>
      <button value={value} onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Button;
