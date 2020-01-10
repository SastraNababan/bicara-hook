import React, { useState } from 'react'

function useCounter(){
  const[state,setState] = useState(0)
  const handleState = () => {
    setState(currentState => currentState + 1)
  }

  const handleTriple = () => {
    handleState();
    handleState();
    handleState();
  };

  
  return [
    state,
    handleState,
    handleTriple
  ]
}

export default useCounter