import React from 'react'
import Todo from './Todo';
import style from "./Todos.module.css"

const Todos = (props) => {
  return (
    <section className={style.section}>
        {
        props.todos.map((todo)=>(
         <Todo todo={todo.todo}  key={todo.id} onDeleteTodo={props.onDeleteTodo} id={todo.id} />) )
        }      
    </section>
  )
}

export default Todos
