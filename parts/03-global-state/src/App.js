/* eslint-disable no-unused-vars */
import React, { Component, useState, createContext, useContext } from "react";
import "./App.css";
import Layout from "./Layout";
import ContextPage from "./ContextPage";
import TodoMVC from "./TodoMVC";

function App() {
  return (
    <Layout>
      {/* <ContextPage/> */}
      <TodoMVC/>
    </Layout>
  );
}

export default App;