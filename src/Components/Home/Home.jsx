import HeaderHome from '../Sections/HomeSections/HeaderHome.jsx';
import TrendingMovies from '../Sections/HomeSections/TrendingMovies.jsx';
import TrendingTv from '../Sections/HomeSections/TrendingTv.jsx';
import TrendingPeople from '../Sections/HomeSections/TrendingPeople.jsx';
import { useEffect, useState } from 'react';
import LoaderSection from '../LoaderSections/LoaderSection.jsx';


export default function Home() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <><LoaderSection /></> : <>
        <HeaderHome />
        <div className="container-fluid px-md-5">
          <section className='trendingMovies mt-5 pt-4'>
            <TrendingMovies />
          </section>
          <section className='trendingTv mt-4'>
            <TrendingTv />
          </section>
          <section className='trendingPeople mt-4 mb-4'>
            <TrendingPeople />
          </section>
        </div></>}
    </>
  )
}
