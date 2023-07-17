import React, { useContext, useEffect, useState } from 'react'
import styles from './HomeSections.module.css';
import { useNavigate } from 'react-router-dom';
import { moviesTvPeopleContext } from '../../Context/MoviesTVPeopleContext.jsx';

export default function HeaderDetailsMovie({ movie, type }) {

    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);
    const { getVideosContext } = useContext(moviesTvPeopleContext);
    
    async function getVideos() {
        if (type === 'movie') {
            const res = await getVideosContext(movie.id, 'movie');
            setVideos(res.results[0]);
        } else {
            const res = await getVideosContext(movie.id, 'tv');
            setVideos(res.results[0]);
        }
    }

    useEffect(() => {
        getVideos();
    }, []);

    function getDetails() {
        if (type === 'tv') {
            navigate(`/tv/${movie.id}`);
        } else {
            navigate(`/movie/${movie.id}`);
        }
    }

    return (
        <>
            <div className={styles.header} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}  >
                <div className="container-fluid px-md-5">
                    <div className="items">
                        <div className="row">
                            <div className='col-md-6 position-relative'>
                                <div className={styles.content}>
                                    {movie.original_title ? <>
                                        <h2 className={styles.Headertitle}>{movie.original_title}</h2>
                                    </> : <>
                                        <h2 className={styles.Headertitle}>{movie.original_name}</h2>
                                    </>}
                                    <p className={styles.HeaderoverView}>{movie.overview}</p>
                                    <div className="btns">
                                        <button className={`${styles.Btn1} ${styles.btn}`} onClick={getDetails}>Watch now</button>
                                        <a href={`https://www.youtube.com/embed/${videos.key}`} target='_blank' className={`${styles.Btn2} ${styles.btn}`}>Watch trailer</a>

                                    </div>
                                </div>
                            </div>
                            <div className={`${styles.image} col-md-6 `}>
                                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.imageHeader} alt={movie.title} title={movie.title} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
