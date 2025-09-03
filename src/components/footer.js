import React from 'react'
import { Link } from 'react-router-dom'

export default function footer() {
  return (
    <div>
      
    {/* <!-- footer --> */}
    <footer class="footer">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-12 col-sm-12 col-md-4">
                    <div class="footer-1">
                    <Link><div class="footer-content">
                        <i class="fa-solid fa-baseball"></i>
                            <h5 class="text-white">BASEBALL</h5>
                        </div></Link>
                        <span>Automate Your Skills</span>
                         <p>High-performance training facility founded by former professional player Phillip Cuevas.</p>
                    </div>
                </div>
                <div class="col-lg-2 col-3 col-sm-3 col-md-2">
                    <div class="service-link">
                        <h4>Services</h4>
                        <ul>
                        <Link><li>Private Lessons</li></Link>
                        <Link><li>Cage Rental</li></Link>
                        <Link><li>Summer Training</li></Link>
                        <Link><li>Facility Rental</li></Link>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-4 col-sm-4 col-md-2">
                    <div class="quick-link ">
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
                
                <div class="col-lg-4 col-5 col-sm-5 col-md-4">
                        <div class="contact-link text-white">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                <Link><i class="fa-solid fa-location-dot"></i>
                                    <span class="detail">123 Baseball Drive Training City, TC 12345</span></Link>
                                </li>
                                <li>
                                <Link><i class="fa-solid fa-phone"></i>
                                <span class="detail">(575) 706-7288</span></Link>
                                </li>
                                <li>
                                <Link><i class="fa-solid fa-envelope"></i>
                                <span class="detail">info@principlebaseball.com</span></Link>
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
