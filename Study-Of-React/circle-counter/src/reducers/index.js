import color from './color';
import number from './number';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  combinedColor: color,
  combinedNumber: number
});

export default reducers;
