import { connect } from 'react-redux';
import Counter from '../components/Counter';
import getRandomColor from '../utils/getRandomColor';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
  number: state.number,
  color: state.color
});

const mapDispatchToProps = (dispatch) => ({
  increaseNum: () => dispatch(actions.increaseNum()),
  decreaseNum: () => dispatch(actions.decreaseNum()),
  setColor: () => {
    const randomColor = getRandomColor();
    dispatch(actions.setColor(randomColor))
  }
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

export default CounterContainer;
