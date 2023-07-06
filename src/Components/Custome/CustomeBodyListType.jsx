import React, { useEffect, useState } from 'react'
import styles from '../Movies/Movies.module.css';
import { Link, useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';

export default function CustomeBodyListType({ item, type }) {

    const [knownfor, setKnownFor] = useState(item.known_for);
    const [desc, setDesc] = useState([]);
    let arr = [];
    let [array, setArray] = useState(arr);
    
    function getArray() {
        {
            knownfor.map((known) => {
                {
                    known.title ?
                        arr.push(known.title) :
                        arr.push(known.name);
                }
            })
        }
        setDesc(arr.join(' ').slice(0, 24));
    }

    useEffect(() => {
        { type === "people" ? getArray() : <></> }
    }, []);

    array = array.join(' ');

    return (
        <>
            <div className={`${styles.col2} my-3`} >
                {type === "movie" ? <>
                    <Link to={`/movie/${item.id}`}>
                        <div className={`${styles.card} card overflow-hidden`}>
                            <div className="image overflow-hidden">
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className={`${styles.img} w-100`} alt={item.title} title={item.title}/>
                            </div>
                            <div className="desc pt-4 px-3">
                                <h2 className={styles.titleTrending}>{item.original_title}</h2>
                                <p className={`${styles.descTrending} m-0 mb-3`}>{dateFormat(item.first_air_date, "mmmm d, yyyy")}</p>
                            </div>
                        </div>
                    </Link>
                </> : <>
                    {type === "tv" ? <><Link to={`/tv/${item.id}`}>
                        <div className={`${styles.card} card overflow-hidden`}>
                            <div className="image overflow-hidden">
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className={`${styles.img} w-100`} alt={item.name} title={item.name} />
                            </div>
                            <div className="desc pt-4 px-3">
                                <h2 className={styles.titleTrending}>{item.original_name}</h2>
                                <p className={`${styles.descTrending} m-0 mb-3`}>{dateFormat(item.first_air_date, "mmmm d, yyyy")}</p>
                            </div>
                        </div>
                    </Link>
                    </> : <>
                        {type === "people" ? <><Link to={`/people/${item.id}`}>
                            <div className={`${styles.cardPeople} card overflow-hidden`}>
                                <div className="image overflow-hidden">
                                    <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} className={`${styles.img} ${styles.imgPeople} w-100`} alt={item.name} title={item.name}/>
                                </div>
                                <div className="desc pt-4 px-3">
                                    <p className={styles.peopleName}>{item.name}</p>
                                    {array === desc ?
                                        <p className={styles.descPeople}>{desc} </p>
                                        :
                                        <p className={styles.descPeople}>{desc} ...</p>
                                    }
                                </div>
                            </div>
                        </Link>
                        </> : <></>}
                    </>}

                </>}
            </div>
        </>
    )
}
