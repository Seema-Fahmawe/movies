import React from 'react'
import CustomeBodyHomeSections from '../../Custome/CustomeBodyHomeSections.jsx';
import styles from '../Details.module.css';

export default function BodyPeopleDetails({ tv, movies }) {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    var settings2 = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    function setSetting(val, length) {
        if (val === 'settings') {
            settings.slidesToShow = length;
        } else if (val === 'settings2') {
            settings2.slidesToShow = length;
        }
    }

    return (
        <>
            <section className='movies mt-5 pt-4'>
                <div className="container-fluid px-md-5">
                    {movies.length > 0 ? <>
                        {movies.length <= 6 ? setSetting('settings', movies.length) : ''}
                        <div className="item">
                            <div className="title mb-3">
                                <h2 className={styles.titleSections}>Movie Credits</h2>
                            </div>
                            <CustomeBodyHomeSections items={movies} setting={settings} type="Movie" />
                        </div></> : <></>}

                    {tv.length > 0 ? <>
                        {tv.length <= 6 ? setSetting('settings2', tv.length) : ''}
                        <div className="item mt-2 mb-4">
                            <div className="title mb-3">
                                <h2 className={styles.titleSections}>TV Credits</h2>
                            </div>
                            <CustomeBodyHomeSections items={tv} setting={settings2} type="Tv" />
                        </div></> : <></>}

                </div>
            </section>
        </>
    )
}
