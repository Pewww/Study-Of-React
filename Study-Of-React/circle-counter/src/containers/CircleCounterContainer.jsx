import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';
import getRandomColor from '../utils/getRandomColor';

const mapStateToProps = (state) => ({
  number: state.number,
  color: state.color
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const randomColor = getRandomColor();
    dispatch(actions.setColor(randomColor))
  }
});

const CircleCounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CircleCounterContainer;
