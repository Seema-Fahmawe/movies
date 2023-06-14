import React from 'react'
import styles from '../Register/Register.module.css';

const CustomInput = ({ type, name,onBlur, value,onChange, textLabel, error, touched,sError }) => {
    return (
        <>
            <div className="mt-3">
                <label htmlFor="exampleInputEmail1" className={`${styles.label} form-label`}>{textLabel} <span className='text-danger fs-5'>*</span> </label>
                {sError ? <div className='text text-danger text-capitalize fw-bold'>** {sError}</div> : ' '}
                <input type={type}  value={value}  name={name} onChange={onChange} onBlur={onBlur} className={`${styles.formControl} ${error && touched ? 'is-invalid' : ''} form-control`} />
                {error && touched ? <div className='alert alert-danger py-1'>{error}</div> : <></>}
            </div>
        </>
    )
}

export default CustomInput