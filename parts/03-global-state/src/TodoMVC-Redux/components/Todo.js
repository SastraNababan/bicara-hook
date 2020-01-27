import React from 'react';
import styled from '@emotion/styled';

const StyledTodo = styled('div')({
  padding: 6,
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignContent: 'center',
  borderBottom: '1px solid #edd',
  background: '#f2f2f2'
});

const FlexGrow = styled('div')({
  display: 'flex',
  flexGrow: 1
});

const StyledButton = styled('button')({
  border: 'none',
  transition: 'transform .2s',
  background: 'none',
  '&:hover, &:focus': {
    transform: 'scale(1.4)',
    outline: 'none',
    cursor: 'pointer'
  }
});

const StyledLabel = styled('label')({
  width: '100%',
  textAlign: 'left'
});

export default class Todo extends React.PureComponent {
  render() {
    const {
      todo = 'text',
      id = 'id',
      onCompleted,
      onRemove,
      completed
    } = this.props;

    return (
      <StyledTodo className={completed ? 'todo-completed' : ''}>
        <FlexGrow>
          <input
            className="mg-r-10"
            id={id}
            type="checkbox"
            defaultValue={completed}
            onChange={event => onCompleted(event, id)}
          />
          <StyledLabel htmlFor={id}>{todo}</StyledLabel>
        </FlexGrow>
        <StyledButton onClick={() => onRemove(id)}>
          <span role="img" aria-label={`remove ${todo}`}>
            ❌
          </span>
        </StyledButton>
      </StyledTodo>
    );
  }
}
