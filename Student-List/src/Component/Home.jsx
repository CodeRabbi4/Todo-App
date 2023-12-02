import React, { useState } from 'react'
import Tables from './Tables'
import NewList from './NewList'
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
   const [tables, setTabels]= useState([])

    const handletableList =(table)=>{
        setTabels((prevList)=>{
            return[... prevList, {id:uuidv4(), table}]    
    });
    }
    const handleRemoveList=(id)=>{
        setTabels((prevList)=>{

            // return oldList.filter((tab)=> tab.id !== id )

            const filterList = prevList.filter((table)=> table.id !== id)
            return filterList
            
        })
    }
    
  return (
    <div className='container mt-5'>
    <h2 className='text-center fs-2 fw-bold my-3'>Student Details</h2>
      
    <NewList onAddList={handletableList} />
      <Tables tables={tables} onRemoveList={handleRemoveList} />
    </div>
  )
}

export default Home
