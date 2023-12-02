import React, { useState } from 'react'
import style from "./Form.module.css"

const Addtodo = (props) => {

    const [Data , setData]= useState({title:"", des:""});
    const{title,des}=Data;

    const handleData=(e)=>{
       const Name = e.target.name;
       setData((oldtodo)=>{
        return{...oldtodo ,[Name]:e.target.value}
       })
    }
    const submitData =(e)=>{
        e.preventDefault()
        props.onAddTodo(Data)
        setData({title:"", des:""})
    }
  return (
    <div className={style.form}>
      <form onSubmit={submitData}>
        <label htmlFor="title" className={style.label}>Title:</label>
        <input type="text" name="title" placeholder='Add List' id='title' className={style.input} value={title} onChange={handleData} />
        <label htmlFor="des"  className={style.label}>Description:</label>
        <textarea name="des" id="des" className={style.des}  rows="3" value={des} onChange={handleData}></textarea>
        <button className={style.btn}>Add list</button>
      </form>
    </div>
  )
}

export default Addtodo;
