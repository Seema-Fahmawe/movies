import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from '../Movies/Movies.module.css';

export default function FilterTV({ tv, setFiltered, setSearchItem, activeGenre, setActiveGenre }) {

    const [genres, setGenres] = useState([]);
    async function getGenres() {
        let { data } = await axios.get('https://api.themoviedb.org/3/genre/tv/list?api_key=6e56c2675e23a05853e1fb0d1f3a0e93');
        setGenres(data.genres);
    }

    useEffect(() => {
        getGenres();
    }, []);

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(tv);
            setSearchItem(tv);
            return;
        }
        const filtered = tv.filter((anyTv) =>
            anyTv.genre_ids.includes(activeGenre),
        );
        setFiltered(filtered);
        setSearchItem(filtered);
    }, [activeGenre]);

    return (
        <>
            <ul class="nav gap-3 justify-content-center mb-4">
                <li class="nav-item" >
                    <button class={activeGenre === 0 ? `${styles.navLinkActive}` : `${styles.navLink}`} aria-current="page" onClick={() => setActiveGenre(0)}>All</button>
                </li>
                {genres.map((genre) => {
                    return <li class="nav-item " key={genre.id}>
                        <button onClick={() => setActiveGenre(genre.id)} class={activeGenre === `${genre.id}` ? `${styles.navLinkActive}` : `${styles.navLink}`} aria-current="page" >{genre.name}</button>
                    </li>
                })}
            </ul>
        </>
    )
}
