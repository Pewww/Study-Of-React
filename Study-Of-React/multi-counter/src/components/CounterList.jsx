import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import './CounterList.css';

const CounterList = ({ counters, onIncrement, onDecrement, onSetColor }) => {
  const counterList = counters.map((counter, index) => (
    <Counter
      key={ index }
      index={ index }
      { ...counter }
      onIncrement={ onIncrement }
      onDecrement={ onDecrement }
      onSetColor={ onSetColor }
    />
  ));

  return (
    <div className="counter-list">
      { counterList }
    </div>
  );
};

CounterList.propTypes = {
  counters: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    number: PropTypes.number
  })),
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

CounterList.defaultProps = {
  counters: []
};

export default CounterList;