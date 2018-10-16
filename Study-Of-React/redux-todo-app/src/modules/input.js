/*
Ducks 구조로 만드는 리덕스 모듈 생성 흐름

1. 액션 타입 정의
2. 액션 생성 함수 생성
3. 초기 상태 정의
4. 리듀서 정의
*/

import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const SET_INPUT = 'input/SET_INPUT';

export const setInput = createAction(SET_INPUT);

const initialState = Map({
  value: ''
});

export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload);
  }
}, initialState);