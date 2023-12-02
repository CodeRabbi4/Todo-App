import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import style from './todo.module.css'

const Todo = (props) => {
    const {title, des} = props.todo;
    const {id} = props;
   

    const handleclick=(id)=>{
        props.onRemoveTodo(id)
    }

  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{des}</p>
        </div>
        <div>
            <button className={style.btn} onClick={()=>{
                handleclick(id)
            }}><FaRegTrashAlt /></button>
        </div>
      
    </article>
  )
}

export default Todo
