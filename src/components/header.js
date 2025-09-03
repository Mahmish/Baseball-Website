import React from 'react';
import {Link} from 'react-router-dom';

export default function header() {
  return (
    <div>
      {/* <!-- Header --> */}
    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 col-12 col-sm-6 col-md-3">
                    <div class="logo">
                        <Link><i class="fa-solid fa-baseball"></i>
                        <span>BASEBALL</span></Link>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6 col-md-6 text-end p-0">
                    <div class="menu">
                        <ul>
                            <Link><li>Home</li></Link>
                            <Link><li>About us</li></Link>
                            <li>
                                <Link>Services</Link>
                                <ul class="dropdown text-start">
                                    <Link><li>Private Lessons</li></Link>
                                    <Link><li>Cage Rental</li></Link>
                                    <Link><li>Summer Training</li></Link>
                                    <Link><li>Facility Rental</li></Link>
                                </ul>
                            </li>
                            <Link><li>Merch</li></Link>
                            <Link><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-6 col-sm-3 col-md-3">
                        <div class="book-now-btn text-end">
                            <Link>Book Now</Link>
                        </div>
                    </div>
            </div>
        </div>

        {/* <!-- col navbar --> */}
        <nav class="navbar navbar-expand-lg ">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">ABOUT US</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/servicePage">SERVICES</Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item"Private Lessons></Link></li>
                                <li><Link class="dropdown-item">Cage Rental</Link></li>
                                <li><Link class="dropdown-item">Summer Training</Link></li>
                                <li><Link class="dropdown-item">Facility Rental</Link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">Merch</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}
