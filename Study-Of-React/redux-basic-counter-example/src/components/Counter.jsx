import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, onIncrement, onDecrement }) => {
  return (
    <div
      className="counter"
      onClick={ onIncrement }
      onContextMenu={
        (e) => {
          e.preventDefault();
          onDecrement();
        }
      }
    >
      <span className="counter-text">{ number }</span>
    </div>
  );
}

Counter.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  onIncrement: () => console.warn('Not Defined'),
  onDecrement: () => console.warn('Not Defined')
};

export default Counter;