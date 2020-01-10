import React, {useState} from 'react';
import useCounter from './useCounter'
// init, read, update
// share logic
function SubscribeBox() {
  const [state, setState] = useState({
    subscribe: false,
  });

  const [like,handleLike, handleTripleLike ] = useCounter(0)
  const [dislike,handleDislike] = useCounter(0)


  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe: !state.subscribe
    })
  }

  return (
    <div>
      <p>
        <button onClick={handleSubscribe}> 
          {state.subscribe ? "Subscribe" : "Unsubscribe" } 
        </button>
        <span> {JSON.stringify(state.subscribe)} </span>
      </p>
      <p>
        <button onClick={handleLike}> Like </button>
        <span> {like} </span>
      </p>
      <p>
        <button onClick={handleDislike}> Dislike </button>
        <span> {dislike} </span>
      </p>
      <p>
        <button onClick={handleTripleLike}> Triple Like</button>
        <span> {like}</span>
      </p>
    </div>
  );
} 

export default SubscribeBox