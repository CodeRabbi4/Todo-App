import React, { useState } from 'react'
import style from "./newtodo.module.css"

const NewTodo = (props) => {

  const [todo, setTodo]= useState({title:"", des:""});

  const {title, des}= todo;

const handleChange =(e)=>{
  const name = e.target.name;
  setTodo((prevtodo)=>{
    return{...prevtodo, [name]:e.target.value }
  })
}

  const handleSubmit =(e)=>{
    e.preventDefault()
    props.onAddTodo(todo)
    setTodo({title:"", des:""})
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" id="title" value={title} onChange={handleChange} />
      <label htmlFor="des">Description:</label>
      <textarea name="des" id="des"  rows="5" value={des} onChange={handleChange}></textarea>
      <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo;
