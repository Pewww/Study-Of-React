import * as types from './ActionTypes';

/*
리덕스의 3가지 원칙 중에서 변화는 언제나 순수(Pure) 함수로 이뤄져야 한다.
랜덤함수는 실행될 때마다 다른 값을 반환하기 때문에 순수하지 않다.
*/

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
})

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});