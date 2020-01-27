import React,{createContext, useReducer} from 'react';
import reducer from "./reducer";

function Nodux(){
  const initialState = [];
  const AppContext = createContext(initialState);
  const Provider = (props) => {
    const store = useReducer(reducer, initialState); // [state, dispatch]
    return(
      <AppContext.Provider value={store}>
        {props.children}
      </AppContext.Provider>
    )
  }
  const Consumer = AppContext.Consumer
  return {
    Provider,
    Consumer,
    AppContext    
  }
}

export default Nodux();