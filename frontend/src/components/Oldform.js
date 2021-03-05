import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'

 
const initialValues ={
    first_Name:'',
    last_Name:'',
    email:'',
    password:''
}
 const onSubmit = async (value) =>{
    console.log('there are:',value)
//   const res = await axios.post('http://127.0.0.1:3000/api/register/',{value})
//          console.log(res.data)
      
}
const validate = value =>{
    const error ={}
    if(!value.first_Name){
        error.first_Name='required first'
    }
    if(!value.last_Name){
        error.first_Name='required las'
    }
    if(!value.email){
        error.email='required email'
    }
    if(!value.password){
        error.password='required'
    }
         return error
}
export default function OldForms() {

    const Formik = useFormik({
        initialValues,
        onSubmit,
        validate
    
    })
    // console.log('fileds',Formik.values)
     console.log('fileds',Formik.errors)
    return (
        <div>
            <form onSubmit ={Formik.handleSubmit}>
            {Formik.touched.first_Name && Formik.errors.first_Name ? <div>{Formik.errors.first_Name}</div> : null}
     <input type="text" name='first_Name' onBlur={Formik.handleBlur} onChange={Formik.handleChange} value={Formik.values.first_Name}    /><br/>
     {Formik.touched.last_Name && Formik.errors.last_Name ? <div>{Formik.errors.last_Name}</div> : null}
     <input type="text" name='last_Name' onBlur={Formik.handleBlur} onChange={Formik.handleChange} value={Formik.values.last_Name}    /><br/>
     <input type="text" name='email' onBlur={Formik.handleBlur} onChange={Formik.handleChange} value={Formik.values.email}   /><br/>
     {Formik.touched.email && Formik.errors.email ? <div>{Formik.errors.email}</div> : null}

     <input type="password" name='password' onBlur={Formik.handleBlur} onChange={Formik.handleChange} value={Formik.values.password}   /><br/>
     { Formik.touched.password && Formik.errors.password ? <div>{Formik.errors.password}</div> : null}


              <button type='submit'>click</button>


            </form>
            
        </div>
    )
}
