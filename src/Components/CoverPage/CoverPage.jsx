import React from 'react'
import styles from './CoverPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function CoverPage({ setUser }) {
    const navigate = useNavigate();
    setUser(null);
    localStorage.removeItem('token');

    return (
        <>
            <div className={`${styles.header} text-center`}>
                <div className="title ">
                    <h2 className={styles.title}>Unlimited movies, TV shows, and more</h2>
                </div>
                <div className="btn ">
                    <button className={styles.startbtn} onClick={() => navigate(`/home`)}>Get Started</button>
                </div>
            </div>
        </>
    )
}
