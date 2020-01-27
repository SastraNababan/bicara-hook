import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { update, remove } from '../actions';

class Todos extends React.PureComponent {
  render() {
    const { state, onRemove, onCompleted } = this.props;
    return state.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        todo={todo.todo}
        completed={todo.completed}
        onRemove={onRemove}
        onCompleted={onCompleted}
      />
    ));
  }
}

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => {
  return {
    onRemove: id => {
      dispatch(remove(id));
    },
    onCompleted: (event, id) => {
      const checked = event.target.checked;
      dispatch(update(id, checked));
    }
  };
};

const ConnectedTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

export default ConnectedTodos;
