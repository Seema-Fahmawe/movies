import React, { useEffect, useState } from 'react'
import styles from '../Details.module.css';
import Slider from 'react-slick';


export default function HeaderPeopleDetails({ person }) {

    const [bio, setBio] = useState(' ');
    const [bioAll, setBioAll] = useState(' ');

    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    let bioStyle = document.querySelector('.bio');

    useEffect(() => {
        if (person.biography) {
            setBioAll(person.biography.split(' ').slice(0, person.biography.length).join(' '));
            setBio(person.biography.split(' ').slice(0, 150).join(' '));
        }
    }, [person.id]);

    function setBioText() {
        setBio(bioAll);
        bioStyle.style.fontSize = '14px';

    }

    return (
        <>
            <div className={styles.header}  >
                <div className="container-fluid px-md-5">
                    <div className="item">
                        <div className="row ">
                            <div className={`${styles.image} col-md-3 `}>
                                <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} className={styles.imageHeader} />
                            </div>

                            <div className={`${styles.col8} col-md-8`}>
                                <div className="content ps-2 ">
                                    <div className='title'>
                                        <h1 className={styles.titleMovie}>{person.name}</h1>
                                    </div>

                                    {person.biography ? <>
                                        <div className="biography mb-4 mt-3">
                                            <h2>Biography</h2>
                                            {person.biography === bio ? <p className='bio'>{bio}</p> :
                                                <p className='bio'>{bio}<span className={styles.readMorePeople} id='more' onClick={setBioText} > Read More <i class="fa-solid fa-angle-right pt-1"></i></span></p>
                                            }
                                        </div></> : <></>}

                                    {person.gender ? <>
                                        <div className="personalInfo mb-4 mt-3">
                                            <h2>Personal Info</h2>
                                            <div className="d-flex gap-5">
                                                <div className="info">
                                                    <h3 className={styles.infoPersonal}>Known For</h3>
                                                    <p>{person.known_for_department}</p>
                                                </div>
                                                <div className="info">
                                                    <h3 className={styles.infoPersonal}>Gender</h3>
                                                    {person.gender === 2 ? <><p>Male</p></> : <><p>Female</p></>}
                                                </div>

                                                <div className="info">
                                                    <h3 className={styles.infoPersonal}>Birthday</h3>
                                                    <p>{person.birthday}</p>
                                                </div>

                                                <div className="info">
                                                    <h3 className={styles.infoPersonal}>Place of Birth</h3>
                                                    <p>{person.place_of_birth}</p>
                                                </div>
                                            </div>


                                        </div></> : <></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


