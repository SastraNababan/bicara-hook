import React,{useContext, useRef} from 'react';
import styled from '@emotion/styled';
// import { connect } from 'react-redux';
import { add } from '../actions';
import Nodux from '../Nodux'

const StyledTextInput = styled('input')({
  minHeight: 30,
  fontSize: 13,
  paddingLeft: 6,
  marginBottom: 30,
  borderRadius: 3,
  minWidth: 300,
  border: '1px solid #ccc'
});

function TextInput(){
  const [state,dispatch] = useContext(Nodux.AppContext)
  let ref = useRef();
  const handleKeyDown = e => {
    const isEnterKey = e.which === 13;
    const value = e.target.value
    if (isEnterKey && value.trim().length > 0) {
      dispatch(add(value));
      ref.current.value = "";
    }
  };
  return(
    <StyledTextInput
      {...state}
      ref={ref}
      onKeyDown={handleKeyDown}
      placeholder="Add an item and hit 'enter'"
    />
    )
}

export default TextInput;