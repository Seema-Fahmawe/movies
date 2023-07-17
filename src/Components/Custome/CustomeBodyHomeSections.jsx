import React from 'react'
import Slider from 'react-slick'
import styles from '../Sections/HomeSections/HomeSections.module.css';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

export default function CustomeBodyHomeSections({ items, type, setting }) {

    return (
        <>
            <Slider {...setting}>
                {items.map((item) => {
                    return <>{type === 'Movie' ? <Link to={`/movie/${item.id}`}>
                        <div className={`${styles.item} pe-3 `} >
                            <div className={`${styles.imageItem} image position-relative`}>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className={`${styles.img} w-100 `} alt={item.title} title={item.title} />
                                {item.poster_path === null ? <></> : <><button className={styles.btnIcon}> <i class="fa-solid fa-play"></i></button>
                                </>}
                            </div>
                            <div className="desc pt-3">
                                {type === 'Movie' ? <>
                                    <h3 className={styles.titleTrending}>{item.original_title}</h3>
                                    <p className={`${styles.descTrending} m-0 mb-3`}>{dateFormat(item.first_air_date, "mmmm d, yyyy")}</p></> : <>
                                    <h3 className={styles.titleTrending}>{item.original_name}</h3>
                                    <p className={`${styles.descTrending} m-0 mb-3`}>{dateFormat(item.first_air_date, "mmmm d, yyyy")}</p></>}
                            </div>
                        </div></Link> :
                        <>{type === 'Tv' ? <>
                            <Link to={`/tv/${item.id}`}>
                                <div className={`${styles.item} pe-3 `} >
                                    <div className={`${styles.imageItem} image position-relative`}>
                                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className={`${styles.img} w-100`} alt={item.name} title={item.name} />
                                        {item.poster_path === null ? <></> : <> <button className={styles.btnIcon}> <i class="fa-solid fa-play"></i></button>
                                        </>}
                                    </div>
                                    <div className="desc pt-3">
                                        {type === 'Tv' ? <><h3 className={styles.titleTrending}>{item.original_name}</h3>
                                            <p className={`${styles.descTrending} m-0 mb-3`}>{dateFormat(item.first_air_date, "mmmm d, yyyy")}</p></>
                                            : <>
                                                <h3 className={styles.titleTrending}>{item.original_title}</h3>
                                                <p className={`${styles.descTrending} m-0 mb-3`}>{dateFormat(item.first_air_date, "mmmm d, yyyy")}</p></>}
                                    </div>
                                </div></Link></> : <>
                            <Link to={`/people/${item.id}`}>
                                <div className={`${styles.item} pe-3 `} >
                                    <div className={`${styles.imageItem} image position-relative`}>
                                        {item.poster_path ? <>
                                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className={`${styles.img} w-100`} alt={item.name} title={item.name} />
                                        </> : <><img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} className={`${styles.img} w-100`} alt={item.name} title={item.name} />
                                        </>}
                                        {item.poster_path || item.profile_path === null ? <></> : <>
                                            <button className={styles.btnIcon}> <i class="fa-solid fa-play"></i></button>
                                        </>}
                                    </div>
                                    <div className="desc pt-3">
                                        {item.original_name ? <><h3 className={styles.titleTrending}>{item.original_name}</h3></> : <>
                                            <h3 className={styles.titleTrending}>{item.original_title}</h3></>}
                                    </div>
                                </div>
                            </Link></>}
                        </>}
                    </>
                })}
            </Slider>

        </>
    )
}
