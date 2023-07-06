import React, { useContext, useEffect, useState } from 'react'
import styles from './Movies.module.css';
import CustomeHeaderSections from '../Custome/CustomeHeaderSections.jsx';
import { moviesTvPeopleContext } from '../Context/MoviesTVPeopleContext.jsx';
import CustomeBodyListType from '../Custome/CustomeBodyListType.jsx';
import Filter from '../utils/Filter.jsx';
import LoaderSection from '../LoaderSections/LoaderSection.jsx';

export default function Upcoming() {

  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const { getListMoviesAndTVsAndPeopleContext } = useContext(moviesTvPeopleContext);
  const [searchItem, setSearchItem] = useState(filtered);

  async function getMovies() {
    const res = await getListMoviesAndTVsAndPeopleContext('movie', 'upcoming');
    setMovies(res.results);
    setFiltered(res.results);
    setSearchItem(res.results);
  }

  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
      <CustomeHeaderSections title="Upcoming Movies" type='Movie' valType={filtered} setType={setSearchItem} />
      <div className="container-fluid px-md-5">
        <Filter items={movies} setFiltered={setFiltered} filtered={filtered} setSearchItem={setSearchItem} activeGenre={activeGenre} setActiveGenre={setActiveGenre} type='movie' />
        {movies.length > 0 ? <>
          <div className="row">
            {searchItem.length > 0 ? <>
              {searchItem.map((movie) => {
                return <CustomeBodyListType key={movie.id} item={movie} type="movie" />
              })}
            </> : <>
              <h2 className={`${styles.title} ${styles.NoItems}`}>No Items</h2>
            </>
            }
          </div></> : <><LoaderSection /></>}

      </div>

    </>
  )
}
