import React from 'react'
import styles from './PageNotFound.module.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.info} `}>
        <div className="col-md-4 card py-4 px-3">
          <div className="title">
            <h1 className={styles.title}>Page Not Found</h1>
          </div>
          <div className="body">
            <p className='mt-3'>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
            <div className="back">
              <i class={`${styles.backIcon} fa-solid fa-angle-left me-2`}></i>
              <span className={styles.back} onClick={() => navigate(`/home`)}>Back to our site</span>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default PageNotFound

