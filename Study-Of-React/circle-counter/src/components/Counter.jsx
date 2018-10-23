import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, color, onIncrement, onDecrement, onSetColor }) => {
  return (
    <div
      className="counter-cover"
      onClick={ onIncrement }
      onDoubleClick={ onSetColor }
      onContextMenu={ (e) => {
        e.preventDefault();
        onDecrement();
      } }
      style={{ backgroundColor: color }}
    >
      <span>{ number }</span>
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
}

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.warn('Function is not defined'),
  onDecrement: () => console.warn('Function is not defined'),
  onSetColor: () => console.warn('Function is not defined')
}

export default Counter;
