// 리듀서는 액션의 type에 따라 변화를 일으키는 함수이다.
// 그래서 리듀서 파일에는 최초 변화를 일으키기전, 지니고 있어야 할 초기상태가 정의되어 있어야 한다.

import * as types from '../actions/ActionTypes';

const initialState = {
  color: 'black',
  number: 0
};

/*
리듀서 함수의 정의
리듀서는 state와 action을 파라미터로 받는다.
state가 undefined일 때, state의 기본값을 initialState로 사용한다.
action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환한다.
이 때, state의 값을 직접 수정하면 안되고,
기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야한다.
*/

function counter (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        number: state.number + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        number: state.number - 1
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}

export default counter;