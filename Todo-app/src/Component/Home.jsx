import React, { useState } from 'react'
import Todos from './Todos'

import style from "./home.module.css"
import NewTodo from './Newtodo'

import { v4 as uuidv4 } from 'uuid';


const Home = () => {

const [todos, setTodos] = useState([]);

const handleAddTodo= (todo)=>{
   
    //  setTodos([...todos,{id:uuidv4(), todo }])   
    setTodos((prevTodos)=>{
      return[...prevTodos, {id:uuidv4(), todo}]
    });
    
}
const handleRemoveTodo = (id)=>{
    
    setTodos((prevTodos)=>{
        const filteredTodos = prevTodos.filter((todo)=> todo.id !== id);
        return filteredTodos;
    })
}

  return (
    <div className={style.home}>
        <h1 style={{color:"white", textAlign:"center", marginBottom:"30px", fontSize:"40px"}}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home
