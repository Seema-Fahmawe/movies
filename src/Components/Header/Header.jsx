import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={`${styles.header} `}>
                <div className='d-flex justify-content-center align-items-center' style={{ height: 90 + 'vh' }}>
                    <h1 className={styles.headerh1} >My Account</h1>
                </div>
            </div>
        </>
    )
}
