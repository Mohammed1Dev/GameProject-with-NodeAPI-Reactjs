import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import './login.css'
import { Link } from 'react-router-dom'
 
const initialValues ={
    email:'',
    password:''
}

const validate = value =>{
    const error ={}
    
    if(!value.email){
        error.email='required email'
    }
    if(!value.password){
        error.password='required'
    }
         return error
}
export default function Forms(props) {
	const onSubmit = async (value) =>{
		console.log('there are:',value)
	  const res = await axios.post('http://127.0.0.1:3000/api/login/',{value})

	      if(!res.data.user){
			alert('password  or email not found')

		  }else{
			localStorage.setItem('jwt_info', JSON.stringify(res.data))
			props.history.push('/categorys')
		  }
			 
		  
	}
    const Formik = useFormik({
        initialValues,
        onSubmit,
        validate
    
    })
    // console.log('fileds',Formik.values)
    //  console.log('fileds',Formik.errors)
    return (
<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card mt-5">
			<div className="card-header">
				<h3>Sign In</h3>
				<div className="d-flex justify-content-end social_icon">
					<span><i className="fab fa-facebook-square"></i></span>
					<span><i className="fab fa-google-plus-square"></i></span>
					<span><i className="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div className="card-body">
				<form onSubmit ={Formik.handleSubmit} className='mt-5'>
					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input type="text" name='email' {...Formik.getFieldProps('email')} className="form-control" placeholder="email"/>
						   
					</div>
                    {Formik.touched.email && Formik.errors.email ? <div>{Formik.errors.email}</div> : null}

					<div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-key"></i></span>
						</div>
						<input type="password" name='password' {...Formik.getFieldProps('password')}  className="form-control" placeholder="password" />
					</div>
                    { Formik.touched.password && Formik.errors.password ? <div>{Formik.errors.password}</div> : null}

					
					<div className="form-group ">
						<input type="submit" value="Login" className="btn login_btn d-block mx-auto " />
					<a className=" d-block text-center mt-3 ahref" href='/register' >Register</a>
					</div>
				</form>
			</div>
			
		</div>
	</div>
  </div>

 
 
 

    )
}
