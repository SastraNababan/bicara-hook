export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';

export function add(todo) {
  return {
    type: ADD,
    payload: {
      todo
    }
  };
}

export function update(id, completed) {
  return {
    type: UPDATE,
    payload: {
      id,
      completed
    }
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    payload: {
      id
    }
  };
}
