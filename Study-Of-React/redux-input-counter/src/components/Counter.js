import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({ number, onIncrement, onDecrement, onChangeNumber }) => {
  return (
    <div>
      <h1>VALUE: { number }</h1>
      <button onClick={ onIncrement }>+</button>
      <button onClick={ onDecrement }>-</button>
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onChangeNumber: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  onIncrement: () => console.warn('Function is not defined'),
  onDecrement: () => console.warn('Function is not defined'),
  onChangeNumber: () => console.warn('Function is not defined')
};

export default Counter;