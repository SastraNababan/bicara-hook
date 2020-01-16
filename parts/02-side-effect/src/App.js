/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import Layout from "./Layout";
import MyClass from "./MyClass";
import MyFunc from "./MyFunc";
import NewsFeed from "./NewsFeed";

function App() {
  const [toggle,setToggle] = useState(true);
  const handleToggle = ()=>setToggle(currentState => !currentState)
  return (
    <Layout>
      <button onClick={handleToggle}>Toggle</button>
      {/* {toggle && <MyClass/>} */}
      {/* {toggle && <MyFunc/>} */}
      <NewsFeed/>
    </Layout>
  );
}

export default App;
