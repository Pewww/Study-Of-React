import React from 'react';
import './Counter.css';

const Counter = ({ number, color, increaseNum, decreaseNum, setColor }) => {
  return (
    <div
      className="circle"
      onClick={ increaseNum }
      onContextMenu={ (e) => {
        e.preventDefault();
        decreaseNum();
      } }
      onDoubleClick={ setColor }
      style={{ backgroundColor: color }}
    >
      { number }
    </div>
  );
}

export default Counter;
