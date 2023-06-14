import React, { useState } from 'react'
import styles from './Register.module.css';
import Header from '../Header/Header.jsx';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { regSchema } from '../Schemas/RegisterSchema.jsx';
import CustomInput from '../Custome/CustomInput.jsx';

export default function Register() {

  let formik = useFormik({
    initialValues: {
      email: '',
      userName: '',
      password: '',
      cPassword: ''
    }, 
    validationSchema: regSchema,
    onSubmit: registerData,
  })

  const [statusError, setStatusError] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function registerData(values) {
    const { data } = await axios.post('https://king-prawn-app-3mgea.ondigitalocean.app/auth/signup', values).catch((err) => {
    if (err.response.data.message === "Email exist") {
        setError(err.response.data.message)
        setStatusError([]);
      } else {
        setStatusError(err.response.data.validationErr);
        setError('');
      }
    })
    if (data.message === 'Done') {
      setError('');
      setStatusError([]);
      navigate('/login');
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid px-sm-5">
        <div className={`${styles.bg} col-lg-5 col-md-9 login my-5`}>
          <h2 className=' fs-4 text-center mb-4'>Register</h2>
          <form onSubmit={formik.handleSubmit}>
            {statusError.map((error, index) => {
              return <div className='alert alert-danger py-1' key={index} >{error.message}</div>
            })}

            <CustomInput type="text" name="userName" onBlur={formik.handleBlur} value={formik.values.userName} onChange={formik.handleChange} textLabel="UserName" error={formik.errors.userName} touched={formik.touched.userName} />
            <CustomInput type="email" name="email" onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} textLabel="Email Address" error={formik.errors.email} touched={formik.touched.email} sError={error} />
            <CustomInput type="password" name="password" onBlur={formik.handleBlur} value={formik.values.password} onChange={formik.handleChange} textLabel="Password" error={formik.errors.password} touched={formik.touched.password} />
            <CustomInput type="password" name="cPassword" onBlur={formik.handleBlur} value={formik.values.cPassword} onChange={formik.handleChange} textLabel="Confirm Password" error={formik.errors.cPassword} touched={formik.touched.cPassword} />

            <button type="submit" className={`${styles.btnSubmit} btn mt-3 `}>Register</button>

          </form>

        </div>
      </div>

    </>
  )
}
