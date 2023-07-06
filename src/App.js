import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register.jsx';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes.jsx';
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx';
import AirToady from './Components/TVs/AirToady';
import TopRated from './Components/TVs/TopRated.jsx';
import Nowplaying from './Components/Movies/Nowplaying';
import Upcoming from './Components/Movies/Upcoming';
import TopRatedMovies from './Components/Movies/TopRatedMovies.jsx';
import PopularTV from './Components/TVs/PopularTV.jsx';
import PopularMovies from './Components/Movies/PopularMovies.jsx';
import OnTv from './Components/TVs/OnTv.jsx';
import PopularPeople from './Components/People/PopularPeople.jsx';
import MoviesTVPeopleContextProvider from './Components/Context/MoviesTVPeopleContext.jsx';
import MovieDetails from './Components/ItemDetails/MovieDetails/MovieDetails.jsx';
import TvDetails from './Components/ItemDetails/TvDetails/TvDetails.jsx';
import PeopleDetails from './Components/ItemDetails/PeopleDetails/PeopleDetails.jsx';
import Loader from './Components/Loader/Loader';
import CoverPage from './Components/CoverPage/CoverPage.jsx';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx';
import ResetPassword from './Components/ResetPassword/ResetPassword.jsx';
import { Helmet } from 'react-helmet';

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function getUser() {
    let token = localStorage.getItem('token');
    let decoded = jwtDecode(token);
    setUser(decoded);
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUser();
    }
    setTimeout(() => {
      setLoading(false);
    }, 4000)
  }, [])


  const router = createBrowserRouter([
    { path: '*', element: <PageNotFound /> },

    {
      path: '', element: <LayOut user={user} setUser={setUser} />, children: [
        { index: true, element: <CoverPage setUser={setUser} user={user} /> },
        { path: '/home', element: <ProtectedRoutes> <Home /></ProtectedRoutes> },
        { path: '/login', element: <Login getUser={getUser} /> },
        { path: '/register', element: <Register /> },
        { path: '/NowPlayingMovies', element: <ProtectedRoutes> <Nowplaying /></ProtectedRoutes> },
        { path: '/popularMovies', element: <ProtectedRoutes> <PopularMovies /></ProtectedRoutes> },
        { path: '/UpcomingMovies', element: <ProtectedRoutes> <Upcoming /></ProtectedRoutes> },
        { path: '/TopRatedMovies', element: <ProtectedRoutes> <TopRatedMovies /></ProtectedRoutes> },
        { path: '/AirToday', element: <ProtectedRoutes><AirToady /></ProtectedRoutes> },
        { path: '/PopularTv', element: <ProtectedRoutes> <PopularTV /></ProtectedRoutes> },
        { path: '/TopRatedTV', element: <ProtectedRoutes> <TopRated /></ProtectedRoutes> },
        { path: '/onTv', element: <ProtectedRoutes> <OnTv /></ProtectedRoutes> },
        { path: '/movie/:id', element: <ProtectedRoutes> <MovieDetails /></ProtectedRoutes> },
        { path: '/tv/:id', element: <ProtectedRoutes> <TvDetails /> </ProtectedRoutes> },
        { path: '/people/:id', element: <ProtectedRoutes><PeopleDetails /></ProtectedRoutes> },
        { path: '/popularPeople', element: <ProtectedRoutes> <PopularPeople /></ProtectedRoutes> },
        { path: '/forgetPassword', element: <ForgetPassword /> },
        { path: '/resetPassword', element: <ResetPassword /> },
      ]
    }
  ])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MoviesApp</title>
        <meta name='description' content='movies app content all movies and tv ' />
      </Helmet>
      {loading ? <><Loader /></> : <>
        <MoviesTVPeopleContextProvider >
          <RouterProvider router={router} />
        </MoviesTVPeopleContextProvider></>}
    </>
  );
}

export default App;
