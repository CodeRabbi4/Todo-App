import React from 'react';
import { FaTrash } from "react-icons/fa";


const Table = (props) => {
    const {Name, Roll, Email} = props.table;
    const {id} = props;
    const handleClick=(id)=>{
       props.onRemoveList(id)
    }
  return (  
    
    <tr>
      <td>{Name}</td>
      <td>{Roll}</td>
      <td>{Email}</td>
      <td ><button className='text-danger bg-transparent btn border-0' onClick={()=>{handleClick(id)}} ><FaTrash /></button></td>
    </tr>
   
  
  )
}

export default Table
