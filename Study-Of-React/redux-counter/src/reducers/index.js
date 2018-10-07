// 리듀서는 액션의 type에 따라 변화를 일으키는 함수이다.
// 그래서 리듀서 파일에는 최초 변화를 일으키기전, 지니고 있어야 할 초기상태가 정의되어 있어야 한다.

/*
리듀서 함수의 정의
리듀서는 state와 action을 파라미터로 받는다.
state가 undefined일 때, state의 기본값을 initialState로 사용한다.
action.type에 따라 다른 작업을 하고, 새 상태를 만들어서 반환한다.
이 때, state의 값을 직접 수정하면 안되고,
기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야한다.
*/

import number from './number';
import color from './color';
import { combineReducers } from 'redux';
/*
서브 리듀서들을 생성했는데 이를 하나로 합치는 역할을 한다.
combineReducers를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어진다.
{
  numberData: {
    number: 0
  },
  colorData: {
    color: 'black'
  }
}
*/

const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers;