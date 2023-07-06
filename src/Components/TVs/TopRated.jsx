import React, { useContext, useEffect, useState } from 'react'
import styles from '../Movies/Movies.module.css';
import CustomeHeaderSections from '../Custome/CustomeHeaderSections.jsx';
import { moviesTvPeopleContext } from '../Context/MoviesTVPeopleContext.jsx';
import CustomeBodyListType from '../Custome/CustomeBodyListType.jsx';
import Filter from '../utils/Filter.jsx';
import LoaderSection from '../LoaderSections/LoaderSection.jsx';

export default function TopRated() {

  const [tv, setTv] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const { getListMoviesAndTVsAndPeopleContext } = useContext(moviesTvPeopleContext);
  const [searchItem, setSearchItem] = useState(filtered);

  async function getTvs() {
    const res = await getListMoviesAndTVsAndPeopleContext('tv', 'top_rated');
    setTv(res.results);
    setFiltered(res.results);
    setSearchItem(res.results);
  }

  useEffect(() => {
    getTvs();
  }, []);

  return (
    <>
      <CustomeHeaderSections title="Top Rated TV Shows" type='Tv' valType={filtered} setType={setSearchItem} />
      <div className="container-fluid px-md-5">
        <Filter items={tv} setFiltered={setFiltered} setSearchItem={setSearchItem} activeGenre={activeGenre} setActiveGenre={setActiveGenre} type='tv' />
        {tv.length > 0 ? <>
          <div className="row">
            {searchItem.length > 0 ? <>
              {searchItem.map((tv) => {
                return <CustomeBodyListType key={tv.id} item={tv} type="tv" />
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
