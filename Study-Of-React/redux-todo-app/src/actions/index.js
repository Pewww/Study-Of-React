import * as types from './ActionTypes';

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  todo
});

export const deleteTodo = (index) => ({
  type: types.DELETE_TODO,
  index
});

export const doneToggle = (index) => ({
  type: types.DONE_TOGGLE,
  index
});

export const deleteAll = () => ({
  type: types.DELETE_ALL
});