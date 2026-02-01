import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div>
      
    {/* <!-- footer --> */}
    <footer className="footer">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 col-12 col-sm-12 col-xl-4 col-xxl-4 col-md-12 col-12">
                    <div className="footer-1">
                    <Link><div className="footer-content">
                        <i className="fa-solid fa-baseball"></i>
                            <h5 className="text-white">BASEBALL</h5>
                        </div></Link>
                        <span>Automate Your Skills</span>
                         <p>High-performance training facility founded by former professional player Phillip Cuevas.</p>
                    </div>
                </div>
                <div className="col-lg-2 col-3 col-sm-12 col-md-3 col-xl-2 col-xxl-2 col-12">
                    <div className="service-link">
                        <h4>Services</h4>
                        <ul>
                        <Link><li>Private Lessons</li></Link>
                        <Link><li>Cage Rental</li></Link>
                        <Link><li>Summer Training</li></Link>
                        <Link><li>Facility Rental</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-4 col-sm-12 col-md-3 col-xl-2 col-xxl-2 col-12">
                    <div className="quick-link ">
                        <h4>Quick Links</h4>
                        <ul>
                            <Link><li>Home</li></Link>
                            <Link><li>About Us</li></Link>
                            <Link><li>Services</li></Link>
                            <Link><li>Merch</li></Link>
                            <Link><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>
                
                <div className="col-lg-4 col-5 col-sm-12 col-md-6 col-xl-4 col-xxl-4 col-12">
                        <div className="contact-link text-white">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                <Link><i className="fa-solid fa-location-dot"></i>
                                    <span className="detail">123 Baseball Drive Training City, TC 12345</span></Link>
                                </li>
                                <li>
                                <Link><i className="fa-solid fa-phone"></i>
                                <span className="detail">(575) 706-7288</span></Link>
                                </li>
                                <li>
                                <Link><i className="fa-solid fa-envelope"></i>
                                <span className="detail">info@principlebaseball.com</span></Link>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
