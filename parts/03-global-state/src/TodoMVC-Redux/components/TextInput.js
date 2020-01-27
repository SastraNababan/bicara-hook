import React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { add } from '../actions';

const StyledTextInput = styled('input')({
  minHeight: 30,
  fontSize: 13,
  paddingLeft: 6,
  marginBottom: 30,
  borderRadius: 3,
  minWidth: 300,
  border: '1px solid #ccc'
});

class TextInput extends React.PureComponent {
  ref = React.createRef();

  handleKeyDown = evt => {
    const value = evt.target.value;
    const isEnterKey = evt.which === 13;
    if (isEnterKey && value.trim().length > 0) {
      this.props.addTodo(value);
      this.ref.current.value = '';
    }
  };

  render() {
    return (
      <StyledTextInput
        {...this.props}
        ref={this.ref}
        onKeyDown={this.handleKeyDown}
        placeholder="Add an item and hit 'enter'"
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => {
      dispatch(add(todo));
    }
  };
};

const ConnectedTextInput = connect(
  null,
  mapDispatchToProps
)(TextInput);

export default ConnectedTextInput;
