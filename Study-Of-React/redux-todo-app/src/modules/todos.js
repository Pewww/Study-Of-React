import { Map, List } from 'immutable';
import { handleAction, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: false
  }),
  Map({
    id: 1,
    text: '라우팅 공부',
    done: true
  })
]);

export default handleAction({
  [INSERT]: (state, action) => {
    const { id, text, done } = action.payload;

    return state.push(Map({
      id,
      text,
      done
    }));
  },
  [TOGGLE]: (state, action) => {
    const { payload: todo } = action;

    return state.updateIn([todo, 'done'], done => !done);
  },
  [REMOVE]: (state, action) => {
    const { payload: todo } = action;

    return state.delete(todo);
  }
});
