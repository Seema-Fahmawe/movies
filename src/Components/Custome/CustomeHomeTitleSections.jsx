import React, { useEffect } from 'react'
import styles from '../Sections/HomeSections/HomeSections.module.css';

export default function CustomeHomeTitleSections({ title, link1, link2, link3, link4, onClick1, onClick2, section }) {

  function clickdata() {
    let btn1 = document.querySelector('.link1');
    let btn2 = document.querySelector('.link2');
    let btn3 = document.querySelector('.link3');
    let btn4 = document.querySelector('.link4');
    let btn5 = document.querySelector('.link5');
    let btn6 = document.querySelector('.link6');

    if (btn2.addEventListener('click', (event) => {
      btn2.style.backgroundColor = 'red';
      btn2.style.color = '#fff';
      btn1.style.backgroundColor = '#fff';
      btn1.style.color = 'black';
    }));
    btn1.addEventListener('click', (event) => {
      btn1.style.backgroundColor = 'red';
      btn1.style.color = '#fff';
      btn2.style.backgroundColor = '#fff';
      btn2.style.color = 'black';
    });

    if (btn3.addEventListener('click', (event) => {
      btn3.style.backgroundColor = 'red';
      btn3.style.color = '#fff';
      btn4.style.backgroundColor = '#fff';
      btn4.style.color = 'black';
    }));
    btn4.addEventListener('click', (event) => {
      btn4.style.backgroundColor = 'red';
      btn4.style.color = '#fff';
      btn3.style.backgroundColor = '#fff';
      btn3.style.color = 'black';
    });

    if (btn5.addEventListener('click', (event) => {
      btn5.style.backgroundColor = 'red';
      btn5.style.color = '#fff';
      btn6.style.backgroundColor = '#fff';
      btn6.style.color = 'black';
    }));
    btn6.addEventListener('click', (event) => {
      btn6.style.backgroundColor = 'red';
      btn6.style.color = '#fff';
      btn5.style.backgroundColor = '#fff';
      btn5.style.color = 'black';
    });
  }

  useEffect(() => {
    clickdata();
  }, []);

  return (
    <>
      <div className="navTrending d-flex  mb-4">
        <h2 className={styles.titleSections}>{title}</h2>
        <div className='links'>
          <button className={styles.links}>
            {section === "movies" ? <>
              <button className={`${styles.link} link1`} onClick={onClick1}>{link1}</button>
              <button className={`${styles.link2} link2`} onClick={onClick2} >{link2}</button>
            </> : <> {section === "tv" ? <>
              <button className={`${styles.link} link3`} onClick={onClick1}>{link1}</button>
              <button className={`${styles.link2} link4`} onClick={onClick2} >{link2}</button></> : <>
              {section === "people" ? <>
                <button className={`${styles.link} link5`} onClick={onClick1}>{link1}</button>
                <button className={`${styles.link2} link6`} onClick={onClick2} >{link2}</button>
              </> : <></>}
            </>}
            </>}
          </button>
        </div>
      </div >
    </>
  )
}
