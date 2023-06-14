import React, { useState } from 'react'
import styles from '../Register/Register.module.css';
import Header from '../Header/Header.jsx';
import { useFormik } from 'formik';
import axios from 'axios';
import { logSchema } from './../Schemas/LoginSchemas';
import CustomInput from '../Custome/CustomInput.jsx';
import { useNavigate } from 'react-router-dom';

export default function Login({ getUser }) {

  let { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: logSchema,
    onSubmit: loginData,
  })

  const [error, setError] = useState('');
  const [statusError, setStatusError] = useState([]);
  const navigate = useNavigate();

  async function loginData(values) {
    let { data } = await axios.post('https://king-prawn-app-3mgea.ondigitalocean.app/auth/login', values).catch((err) => {
      if (err.response.data.message === 'Validation Err') {
        setStatusError(err.response.data.validationErr);
        setError('');
      } else {
        setError(err.response.data.message);
        setStatusError([]);
      }
    })
    if (data.message === 'Done') {
      setError('');
      setStatusError([]);
      navigate('/');
      localStorage.setItem('token', data.access_token);
      getUser();
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid px-sm-5">
        <div className={`${styles.bg} col-lg-5 col-md-9 login my-5`}>
          <h2 className=' fs-4 text-center mb-4'>Login</h2>
          <form onSubmit={handleSubmit}>
            {statusError.map((err) => {
              return <div className='alert alert-danger py-1'>{err.message}</div>
            })}

            {error ? <div className='text text-danger fw-bold'>** {error}</div> : ''}

            <CustomInput type="email" name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} textLabel="Email address" error={errors.email} touched={touched.email} />
            <CustomInput type="password" name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} textLabel="Password" error={errors.password} touched={touched.password} />

            <div className="mb-3 form-check p-0 mt-3">
              <input type="checkbox" className={`${styles.memberInput} `} id="exampleCheck1" />
              <label className={`${styles.member} form-check-label ps-2`} htmlFor="exampleCheck1"> Remember me </label>
            </div>

            <button type="submit" className={`${styles.btnSubmit} btn mb-3`}>Log in</button>
            <a href='#' className={`${styles.forget}`}>Lost your password?</a>
          </form>

        </div>
      </div>
    </>
  )
}
