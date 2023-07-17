import HeaderHome from '../Sections/HomeSections/HeaderHome.jsx';
import TrendingMovies from '../Sections/HomeSections/TrendingMovies.jsx';
import TrendingTv from '../Sections/HomeSections/TrendingTv.jsx';
import TrendingPeople from '../Sections/HomeSections/TrendingPeople.jsx';

export default function Home() {

  return (
    <>
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
        </div>

    </>
  )
}
