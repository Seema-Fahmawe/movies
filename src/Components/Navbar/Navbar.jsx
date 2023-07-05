import React from 'react'
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser }) {

    const navigate = useNavigate();

    window.addEventListener('scroll', function () {
        if (window.scrollY > 90) {
            document.getElementById('navs').style.backgroundColor = '#000';
            document.getElementById('navs').style.transition = '1s';
        } else {
            document.getElementById('navs').style.backgroundColor = 'transparent';
        }
    })

    function logout() {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    }

    return (
        <>
            <nav className={`${styles.navbar}  navbar navbar-expand-lg fixed-top `} id='navs'>
                <div className="container-fluid px-md-5">
                    <div className="col-lg-2">
                        <a className={`${styles.navbarBrand} navbar-brand`} href="#">Movies App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {user ? <><ul className="navbar-nav ms-5 mb-2 mb-lg-0 gap-3 ">

                            <li className="nav-item ">
                                <Link className={`${styles.navLink} nav-link active `} aria-current="page" to='/home'>Home</Link>
                            </li>

                            <li class="nav-item dropdown">
                                <div>
                                    <a className={`${styles['dropdown-toggle']} ${styles.navLink} nav-link dropdown-toggle text-white`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Movies
                                    </a>
                                    <ul className={`${styles.dropMenu} dropdown-menu`}>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/popularMovies'>Popular</Link></li>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/NowPlayingMovies'>Now Playing</Link></li>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/UpcomingMovies'>Upcoming</Link></li>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/TopRatedMovies'>Top Rated</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <div>
                                    <a className={`${styles['dropdown-toggle']} ${styles.navLink} nav-link dropdown-toggle text-white`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        TV Shows
                                    </a>
                                    <ul className={`${styles.dropMenu} dropdown-menu`}>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/PopularTv'>Popular</Link></li>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/AirToday'>Airing Today</Link></li>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/onTv'>On TV</Link></li>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/TopRatedTV'>Top Rated</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li class="nav-item dropdown">
                                <div>
                                    <a className={`${styles['dropdown-toggle']} ${styles.navLink} nav-link dropdown-toggle text-white`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        People
                                    </a>
                                    <ul className={`${styles.dropMenu} dropdown-menu`}>
                                        <li><Link className={`${styles.dropItem} dropdown-item `} to='/popularPeople'>Popular People</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul></> : <></>}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">

                            <li class="nav-item dropdown">
                                <div>
                                    <a className={`${styles['dropdown-toggle']} nav-link dropdown-toggle text-white`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-regular fa-user fs-4"></i>
                                    </a>
                                    <ul className={`${styles.dropMenu} dropdown-menu`}>
                                        {!user ?
                                            <>
                                                <li><Link className={`${styles.dropItem} dropdown-item `} to='/register'>Register</Link></li>
                                                <li><Link className={`${styles.dropItem} dropdown-item `} to='login'>Login</Link></li>
                                            </> :
                                            <>
                                                <li><span className={`${styles.dropItem} dropdown-item `} onClick={logout}>Logout</span></li>
                                            </>
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>



                    </div>
                </div>
            </nav>
        </>



    )
}
