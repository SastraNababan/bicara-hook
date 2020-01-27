/* eslint-disable no-unused-vars */
import React, { Component, useState, createContext, useContext } from "react";
import "./App.css";
import Layout from "./Layout";
import ContextPage from "./ContextPage";
import ReducerPage from "./ReducerPage";
import TodoMVCRedux from "./TodoMVC-Redux";
import TodoMVCHook from "./TodoMVC-Hook";

function App() {
  return (
    <Layout>
      <ContextPage/>
      {/* <ReducerPage/> */}
      {/* <TodoMVCRedux/> */}
      {/* <TodoMVCHook/> */}
    </Layout>
  );
}

export default App;