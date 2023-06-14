import React from 'react'
import styles from './Navbar.module.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ user, setUser }) {

    const navigate = useNavigate();
    window.addEventListener('scroll', function () {
        if (window.scrollY > 90) {
            document.getElementById('navbar').classList.add('bg-dark');
            document.getElementById('navbar').style.transition = '1s';
        } else {
            document.getElementById('navbar').classList.remove('bg-dark');
        }
    })

    function logout() {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    }

    return (
        <>
            <nav className={`${styles.navbar} navbar navbar-expand-lg  fixed-top py-4`} id='navbar'>
                <div className="container-fluid px-md-5">
                    <div className="col-lg-4">
                        <a className="navbar-brand" href="#"><img src='assets/images/logo-white.png' className='w-25' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item ">
                                <Link className={`${styles.navLink} nav-link active `} aria-current="page" to=''>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`${styles.navLink} nav-link active `} to='/movies'>Movies</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item ">
                                <a className="nav-link text-white" href="#"><i class="fa-solid fa-magnifying-glass fs-5"></i></a>
                            </li>
                            <li class="nav-item dropdown">
                                <div>
                                    <a className={`${styles['dropdown-toggle']} nav-link dropdown-toggle text-white`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="fa-regular fa-user fs-5"></i>
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
