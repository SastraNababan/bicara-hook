import uuid from 'uuid/v4';
import * as actions from './actions';

export const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  console.log(type,payload)
  switch (type) {
    case actions.ADD:
      return [
        ...state,
        {
          todo: payload.todo,
          id: uuid(),
          completed: false
        }
      ];
    case actions.REMOVE:
      console.log(state)
      return state.filter(todo => todo.id !== payload.id);
    case actions.UPDATE:
      return state.map(todo => {
        if (todo.id === payload.id) {
          todo.completed = payload.completed;
          todo.todo = payload.todo || todo.todo;
        }

        return todo;
      });
    default:
      return state;
  }
}
