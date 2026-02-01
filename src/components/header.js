import React from 'react';
import {Link} from 'react-router-dom';

export default function header() {
  return (
    <div>
      {/* <!-- Header --> */}
    <header className="header">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-3 col-12 col-sm-6 col-md-3">
                    <div className="logo">
                        <Link><i className="fa-solid fa-baseball"></i>
                        <span>BASEBALL</span></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 text-end p-0">
                    <div className="menu">
                        <ul>
                            <Link><li>Home</li></Link>
                            <Link><li>About us</li></Link>
                            <li>
                                <Link>Services</Link>
                            </li>
                            <Link><li>Merch</li></Link>
                            <Link><li>Contact Us</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-6 col-sm-3 col-md-3">
                        <div className="book-now-btn text-end">
                            <Link>Book Now</Link>
                        </div>
                    </div>
            </div>
        </div>

        {/* <!-- col navbar --> */}
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">ABOUT US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">SERVICE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">MERCH</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">CONTACT US</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    </div>
  )
}
