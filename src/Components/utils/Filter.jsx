import React, { useContext, useEffect, useState } from 'react'
import styles from '../Movies/Movies.module.css';
import { moviesTvPeopleContext } from '../Context/MoviesTVPeopleContext.jsx';

export default function Filter({ items, setFiltered, setSearchItem, activeGenre, setActiveGenre, type }) {

    const [genres, setGenres] = useState([]);
    const { getGenresContext } = useContext(moviesTvPeopleContext);

    async function getGenres() {
        const res = await getGenresContext(`${type}`);
        setGenres(res.genres);
    }

    useEffect(() => {
        getGenres();
    }, []);


    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(items);
            setSearchItem(items);
            return;
        }
        const filtered = items.filter((item) =>
            item.genre_ids.includes(activeGenre),
        );
        setFiltered(filtered);
        setSearchItem(filtered);
    }, [activeGenre]);


    return (
        <>
            <ul class='nav gap-3 justify-content-center mb-5'>
                <li class="nav-item" >
                    <button class={activeGenre === 0 ? `${styles.navLinkActive}` : `${styles.navLink}`} aria-current="page" onClick={() => setActiveGenre(0)}>All</button>
                </li>
                {genres.map((genre) => {
                    return <li class="nav-item navItem" key={genre.id}>
                        <button onClick={() => setActiveGenre(genre.id)} class={activeGenre === genre.id ? `${styles.navLinkActive}` : `${styles.navLink}`} aria-current="page" >{genre.name}</button>
                    </li>
                })}
            </ul>
        </>
    )
}
