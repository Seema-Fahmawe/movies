import './App.css';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register.jsx';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Movies from './Components/Movies/Movies.jsx';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes.jsx';
import PageNotFound from './Components/PageNotFound/PageNotFound.jsx';

function App() {

  const [user, setUser] = useState(null);
  
  function getUser() {
    let token = localStorage.getItem('token');
    let decoded = jwtDecode(token);
    setUser(decoded);
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUser();
    }
  }, [])


  const router = createBrowserRouter([
    {
      path: '', element: <LayOut user={user} setUser={setUser}/>, children: [
        { index: true, element: <Home /> },
        { path: '/movies', element: <ProtectedRoutes><Movies /></ProtectedRoutes> },
        { path: '/login', element: <Login getUser={getUser} /> },
        { path: '/register', element: <Register /> },
        {path:'*',element:<PageNotFound/>}
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
