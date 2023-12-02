import React from 'react'
import Table from './Table';

const Tables = (props) => {
  return (
   <>
      <table className="table table-dark table-striped">
  <thead>
    <tr className='text-center'>
      <th scope="col">Name</th>
      <th scope="col">Roll</th>
      <th scope="col">Email</th>
      <th scope="col">Delet</th>
    </tr>
  </thead>
  <tbody className='text-center'>
 {props.tables.map((table)=>
  ( <Table table={table.table} key={table.id} id={table.id}
    onRemoveList={props.onRemoveList}
   />))
   }
 </tbody>
 
</table>
</>
  )
}

export default Tables;



