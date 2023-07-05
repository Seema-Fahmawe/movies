import React, { useState } from 'react'
import CustomeHeaderSections from '../Custome/CustomeHeaderSections.jsx'
import styles from '../Register/Register.module.css';
import CustomInput from '../Custome/CustomInput.jsx';
import { useFormik } from 'formik';
import axios from 'axios';
import { resetPasswordSchema } from '../Schemas/ResetPasswordSchema.jsx';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {

const navigate=useNavigate();

    const [statusError, setStatusError] = useState([]);
    const [error, setError] = useState('');

    const { values, handleChange, errors, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            cPassword: '',
            forgetCode: '',
        }, validationSchema: resetPasswordSchema,
        onSubmit: resetData,
    });

    async function resetData(values) {
        let { data } = await axios.patch('https://king-prawn-app-3mgea.ondigitalocean.app/auth/forgetPassword', values).catch((err) => {
            if (err.response.data.message === 'Validation Err') {
                setStatusError(err.response.data.validationErr);
                setError('');
            }
            else {
                setError(err.response.data.message);
                setStatusError([]);
            }
        });
        if(data.message === 'Done'){
            setStatusError([]);
            setError('');
            navigate('/login');
        }
    }

    return (
        <>
            <CustomeHeaderSections title='My Account' type='login' />
            <div className="container-fluid px-sm-5">
                <div className={`${styles.bg} col-lg-5 col-md-9 login my-5`}>
                    <h2 className=' fs-4 text-center mb-4'>Send Code</h2>
                    <form onSubmit={handleSubmit}>
                        {statusError.map((err) => {
                            return <div className='alert alert-danger py-1'>{err.message}</div>
                        })}
                        {error ? <div className='text text-danger fw-bold'>** {error}</div> : ''}

                        <CustomInput type="email" name="email" textLabel="Email address" onBlur={handleBlur} value={values.email} onChange={handleChange} error={errors.email} touched={touched.email} />
                        <CustomInput type="password" name="password" textLabel="Password" value={values.password} onChange={handleChange} onBlur={handleBlur} touched={touched.password} error={errors.password} />
                        <CustomInput type="password" name="cPassword" textLabel="Confirm Password" value={values.cPassword} onChange={handleChange} onBlur={handleBlur} touched={touched.cPassword} error={errors.cPassword} />
                        <CustomInput type="text" name="forgetCode" textLabel="Code" value={values.forgetCode} onChange={handleChange} onBlur={handleBlur} touched={touched.forgetCode} error={errors.forgetCode} />
                        <button type="submit" className={`${styles.btnSubmit} btn mb-3 mt-4`}>Reset Password</button>
                    </form>
                </div>
            </div>
        </>
    )
}
