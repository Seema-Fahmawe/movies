import React, { useState } from 'react'
import styles from '../ItemDetails/Details.module.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export default function CustomeHeaderItemDetails({ item, genres, casts, setCasts, castAll, type }) {

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

    const [setting, setSetting] = useState(settings);

    const click = document.getElementById('more');

    function setSlider() {
        setCasts(castAll);
        var settingsChange = {
            dots: false,
            arrows: false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 1000,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        setSetting(settingsChange);
    }


    return (
        <>
        
            <div className={styles.header} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.backdrop_path})` }} >
                <div className="container-fluid px-md-5">
                    <div className="item">
                        <div className="row ">
                            <div className={`${styles.image} col-md-3 `}>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className={styles.imageHeader} />
                            </div>

                            <div className={`${styles.col8} col-md-8`}>
                                <div className="content ps-2 ">
                                    <div className='title'>
                                        {type === "Movie" ? <>
                                            <h1 className={styles.titleMovie}>{item.original_title}</h1>
                                        </> : <>
                                            <h1 className={styles.titleMovie}>{item.original_name}</h1>
                                        </>}
                                    </div>
                                    
                                    <div className="genres">
                                        <ul className='d-flex gap-3 p-0 '>
                                            {genres.map((genre) => {
                                                return <li className={styles.genre}>{genre.name}</li>
                                            })}
                                        </ul>
                                    </div>

                                    <div className="overview mb-4 mt-3">
                                        <p>{item.overview}</p>
                                    </div>

                                    {casts.length > 0 ? <>
                                        <div className="casts">
                                            <h2>Casts</h2>
                                            <div className="row">
                                                <Slider {...setting} className={styles.slickSlide}>
                                                    {casts.map((cast) => {
                                                        return <div className='col-md-2'>
                                                            <Link to={`/people/${cast.id}`}>
                                                                {cast.profile_path ? <>
                                                                    <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`} className='w-100 pe-3' />
                                                                </> : <>
                                                                </>}
                                                                <p className={styles.castName}>{cast.name}</p>
                                                            </Link>
                                                        </div>
                                                    })}

                                                </Slider>
                                                {castAll.length !== casts.length ? <>
                                                    <span className={styles.more} onClick={() => setSlider({ settings })} id='more'>More ...</span>
                                                </> : <></>}
                                            </div>
                                        </div>
                                    </> : <></>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
