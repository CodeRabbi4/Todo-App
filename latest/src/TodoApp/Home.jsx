import React, { useState } from 'react'
import Todos from './Todos'
import Style from "./Home.module.css"
import Addtodo from './Addtodo'
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
const [todos, setTodos] = useState([
  {
    id:1,
    todo:{
    title:"Todo 1",
    des:"Todo 1 Description"
    }
    
  },
  {
    id:2,
    todo:{
    title:"Todo 2",
    des:"Todo 2 Description"
    }
    
  }
]);


// There Are use same parameter Todo component use the props name 
const addTodos=(todo)=>{
  setTodos((prevtodo)=>{
    return[...prevtodo, {id:uuidv4(), todo}]
  });
};
const deleteTodo=(id)=>{
    const DeleteTodo = todos.filter((todo)=>{
      return todo.id !== id
    })
    setTodos(DeleteTodo)
}
  return (
    <div className={Style.container}>
      <h1 style={{fontFamily:'sans-serif', marginBottom:"30px", color:"white", fontSize:"40px"  }}>Todo App</h1>
      <Addtodo onAddTodo={addTodos}/>
     <Todos todos={todos} onDeleteTodo={deleteTodo} />
    </div>
  )
}

export default Home;
