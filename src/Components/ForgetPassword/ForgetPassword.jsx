import React, { useState } from 'react'
import CustomeHeaderSections from './../Custome/CustomeHeaderSections';
import styles from '../Register/Register.module.css';
import CustomInput from '../Custome/CustomInput.jsx';
import { useFormik } from 'formik';
import { forgetPasswordSchema } from './../Schemas/ForgetPasswordSchema';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    const [statusError, setStatusError] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    let { values, handleChange, errors, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: forgetPasswordSchema,
        onSubmit: sendCodeData,
    })

    async function sendCodeData(values) {
        let { data } = await axios.patch('https://king-prawn-app-3mgea.ondigitalocean.app/auth/sendCode', values).catch((err) => {
            if (err.response.data.message === 'Validation Err') {
                setStatusError(err.response.data.validationErr);
                setError('');
            }
            else {
                setError(err.response.data.message);
                setStatusError([]);
            }
        });
        if (data.message === 'Done') {
            setError('');
            setStatusError([]);
            navigate('/resetPassword');
        }
    }

    return (
        <>
            <CustomeHeaderSections title="My Accout" type="login" />
            <div className='container-fluid px-sm-5'>
                <div className={`${styles.bg} col-lg-5 col-md-9 login my-5`}>
                    <h2 className=' fs-4 text-center mb-4'>Send Code</h2>
                    <form onSubmit={handleSubmit}>
                        {statusError.map((err) => {
                            return <div className='alert alert-danger py-1'>{err.message}</div>
                        })}
                        {error ? <div className='text text-danger fw-bold'>** {error}</div> : ''}

                        <CustomInput type="email" name="email" textLabel="Email address" onBlur={handleBlur} value={values.email} onChange={handleChange} error={errors.email} touched={touched.email} />
                        <button type="submit" className={`${styles.btnSubmit} btn mb-3 mt-4`}>Send Code</button>
                    </form>
                </div>
            </div>
        </>
    )
}
