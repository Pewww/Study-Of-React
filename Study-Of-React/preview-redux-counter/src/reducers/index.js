import * as types from '../actions/ActionTypes';

const initialState = {
  number: 0,
  color: 'black'
};

export default function previewCounter (state = initialState, action) {
  switch (action.type) {
    case types.INCREASE_NUM:
      return {
        ...state,
        number: state.number + 1
      };
    
    case types.DECREASE_NUM:
      return {
        ...state,
        number: state.number - 1
      };

    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    
    default: return state;
  }
}
