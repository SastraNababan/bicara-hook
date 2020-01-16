import React, { useState, useEffect } from 'react';
function MyFunc() {

  console.log("-> function init");
  const [count, setCount] = useState(0);
  const handleCount = () =>
    setCount(prevState => {
      return prevState + 1;
    });

  useEffect(()=>{
    // run on every render
    console.log("-> my first effect")
    // handleCount()
  })

  // componentDidMount equivalent
  useEffect(()=>{
    console.log("-> componentDidMount equivalent")
  },[])
  
  // componentDidUpdate equivalent
  useEffect(()=>{
    if(count > 0) {
      console.log("-> componentDidUpdate equivalent")
    }
  },[count])
  
  // componentWillUnmount equivalent
  useEffect(()=>{
    // clean-up function
    return(
      ()=>{
       console.log("-> componentWillUnmount equivalent"); 
      }
    )
  },[])

  console.log(`-> Start Render (${count}) `);
  return (
    <div>
      <h1> Function Component </h1>
      <p>
        <button onClick={handleCount}>Count </button>
        {count}
      </p>
    </div>
  );
}
export default MyFunc
