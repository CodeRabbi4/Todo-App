import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

import style from "./Todo.module.css"


const Todo = (props) => {
  // Use this same props name 
  const {title, des} =props.todo
  const {id}= props

  const handleDeleteTodo =(id)=>{
    props.onDeleteTodo(id)
  }
  return (
    <article className={style.todo}>
      <div>
        <h2 className={style.h2}>{title}</h2>
        <p className={style.p}>{des}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>handleDeleteTodo(id)}><FaRegTrashAlt /></button>
        </div>
    </article>
  )
};

export default Todo;
