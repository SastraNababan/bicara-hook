import React,{useContext} from 'react';
import Todo from './Todo';
import { update, remove } from '../actions';
import Nodux from "../Nodux";

function Todos(){
  const [state, dispatch] = useContext(Nodux.AppContext);
   const  onRemove = (id) => dispatch(remove(id));
   const  onCompleted  = (event,id) => {
    const checked = event.target.checked; 
    dispatch(update(id, checked));
  }
  
  return state.map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      todo={todo.todo}
      completed={todo.completed}
      onRemove={onRemove}
      onCompleted={onCompleted}
    />
  ));
}

export default Todos;