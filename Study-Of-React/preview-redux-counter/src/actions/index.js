import * as types from './ActionTypes';

export const increaseNum = () => ({
  type: types.INCREASE_NUM
});

export const decreaseNum = () => ({
  type: types.DECREASE_NUM
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});
