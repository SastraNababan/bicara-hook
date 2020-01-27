import React from "react";
import Nodux from "./Nodux"
import TextInput from "./components/TextInput";
import Todos from "./components/Todos";

import "./styles.css";

const {Provider} = Nodux;

function App() {
  return (
    <Provider>
      <div className="app">
        <h1>TodosMVC - React Hooks </h1>
        <TextInput />
        <Todos />
      </div>
    </Provider>
  );
}

export default App