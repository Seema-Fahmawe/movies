import React from 'react'
import styles from '../ItemDetails/Details.module.css';
import Slider from 'react-slick';
import dateFormat from 'dateformat';
import CustomeBodyHomeSections from './CustomeBodyHomeSections.jsx';

export default function CustomeBodyItemDetails({ video, review, recommendation, similar, type }) {

    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    var settings2 = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    var settings3 = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    var settings4 = {
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
            settings.slidesToShow = 1;
        } else if (val === 'settings3') {
            settings3.slidesToShow = length;
        } else if (val === 'settings4') {
            settings4.slidesToShow = length;
        }
    }


    return (
        <>
            <div className="container-fluid px-md-5">
                {review.length > 0 ? <>
                    <div className="reviews">
                        <div className="title mb-3">
                            <h2 className={styles.titleSections}>Reviews</h2>
                        </div>
                        <div className=''>
                            <Slider {...settings2} >
                                {review.map((item) => {
                                    return <div className='item' key={item.id}>
                                        <div className="review mb-5">
                                            <div className={`${styles.card} card px-4 py-4`}>
                                                <div className="d-flex align-items-center">
                                                    {item.author_details.avatar_path ? <>
                                                        {item.author_details.avatar_path.startsWith('/https://') ? <>
                                                        </>
                                                            : <div className={styles.imageReview}>
                                                                <img src={`https://image.tmdb.org/t/p/w500/${item.author_details.avatar_path}`} className={`${styles.imgReview} w-100 h-100`} />
                                                            </div>}
                                                    </> : <></>}
                                                    <div className={styles.info}>
                                                        <div className="name">
                                                            <h3 className={styles.url}><a href={item.url} className={styles.url}>A review by {item.author}</a></h3>
                                                            <h5 className={styles.writer}>Written by {item.author} on {dateFormat(item.created_at, "mmmm d, yyyy")}</h5>
                                                        </div>
                                                        {item.author_details.rating ? <>
                                                            <span className={styles.rating}><i class={`${styles.starIcon} fa-solid fa-star`}></i> {item.author_details.rating}.0</span>
                                                        </> : <></>}
                                                    </div>

                                                </div>
                                                <div className="content">
                                                    <p className={`${styles.content} mt-4`}>{item.content.slice(0, 1150)} ...
                                                        <a href={item.url} className={styles.readMore}>read the rest</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </Slider>
                        </div>
                    </div>
                </> : <></>}

                {video.length > 0 ? <>
                    {video.length === 1 ? setSetting('settings') : ''}
                    <div className="videos mt-3">
                        <div className="title mb-3">
                            <h2 className={styles.titleSections}>Videos</h2>
                        </div>
                        <Slider {...settings}>
                            {video.map((item) => {
                                return <div className='item' key={item.id}>
                                    <div className="video mb-5">
                                        <iframe width="625" height="420" src={`https://www.youtube.com/embed/${item.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                </div>
                            })}
                        </Slider>
                    </div>
                </> : <></>}

                {recommendation.length > 0 ? <>
                    {recommendation.length <= 6 ? setSetting('settings4', recommendation.length) : ''}
                    <div className="recommendations mt-3">
                        <div className="title mb-3">
                            <h2 className={styles.titleSections}>Recommendations</h2>
                        </div>
                        <CustomeBodyHomeSections items={recommendation} type={type} setting={settings4} />
                    </div>
                </> : <></>}

                {similar.length > 0 ? <>
                    {similar.length <= 6 ? setSetting('settings3', similar.length) : ''}
                    <div className="similar mt-5">
                        <div className="title mb-3">
                            <h2 className={styles.titleSections}>Similar</h2>
                        </div>
                        <CustomeBodyHomeSections items={similar} type={type} setting={settings3} />
                    </div>
                </> : <></>}
            </div>
        </>
    )
}
