// export가 여러 개 일 때 *을 모든 것을 불러오고 as로 이름을 재설정(?) 할 수 있다.
import * as types from './ActionTypes';

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});