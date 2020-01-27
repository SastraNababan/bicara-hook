import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './reducer';
import TextInput from './components/TextInput';
import Todos from './components/Todos';

import './styles.css';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>TodosMVC React Redux</h1>
        <TextInput />
        <Todos />
      </div>
    </Provider>
  );
}

export default App