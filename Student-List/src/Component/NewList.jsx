import React from 'react'
import { useFormik } from 'formik';
import { object, string,number} from 'yup';
const NewList = (props) => {
const formik= useFormik({
    initialValues:{
        Name:"",
        Roll:"",
        Email:""
    },
    validationSchema:object({
        Name:string().min(3, "The name have must be 3 character").required(),
        Roll:number().min(1).required(),
        Email:string().email().required()
    })
    ,
    onSubmit:(values, {resetForm})=>{
        props.onAddList(values)
        resetForm(values="")
    }
});
    const nameError =(formik.touched.Name && formik.errors.Name &&
        <small className='text-danger'>{formik.errors.Name}</small>
    );
    const rollError =(formik.touched.Roll && formik.errors.Roll &&
        <small className='text-danger'>{formik.errors.Roll}</small>
    );
    const emailError =(formik.touched.Email && formik.errors.Email &&
        <small className='text-danger'>{formik.errors.Email}</small>
    );


  return (
    <div className='conatiner'>
      <form action="" className='w-50 m-auto shadow p-4 rounded-3 mb-5' onSubmit={formik.handleSubmit}>
        
        <label htmlFor="name" className='d-block'>Name:</label>
        <input type="text" name="Name" id="name" className='form-control shadow-none mt-1' value={formik.values.Name} onChange={formik.handleChange} />
        {nameError}

        <label htmlFor="roll" className='d-block mt-3'>Roll:</label>
        <input type="number" name="Roll" id="roll" className='form-control shadow-none mt-1' value={formik.values.Roll} onChange={formik.handleChange} />
        {rollError}

        <label htmlFor="email" className='d-block mt-3'>Email:</label>
        <input type="email" name="Email" id="email" className='form-control shadow-none mt-1' value={formik.values.Email} onChange={formik.handleChange} />
        {emailError}

        <button type="submit" className='btn btn-success px-3 py-2 d-block mx-auto mt-4 text-uppercase fw-semibold'>Add to list</button>
      </form>
    </div>
  )
}

export default NewList
