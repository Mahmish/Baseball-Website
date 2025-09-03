import React from 'react';
import {Link} from 'react-router-dom';


export default function contact() {
  return (
    <div>
      {/* <!-- contact page --> */}
    <section className="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12 col-sm-12 col-md-12">
                    <div className="contact-title text-center">
                        <h2>Contact Us</h2>
                        <p>Ready to automate your skills? Get in touch today.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="info-form p-0">
                    <div className="col-lg-6 col-12 col-sm-7 col-md-7">
                        <div className="contact-form">
                            <h3>Get Started Today</h3>
                        <form>
                                <div className="form-group mb-3">
                                    <label for="service">Name</label>
                                    <input type="text" className="form-control" name="name" id=""/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="service">Email</label>
                                    <input type="email" className="form-control" name="email" id=""/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="service">Phone</label>
                                    <input type="number" className="form-control" name="number" id=""/>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="service">Service Needed</label>
                                    <select id="service" className="form-control">
                                        <option selected>Select a Service</option>
                                        <option>Private Lessons</option>
                                        <option>Cage Rental</option>
                                        <option>Summer Training</option>
                                        <option>Facility Rental</option>
                                    </select>
                                </div>
                                <div className="form-group mb-3">
                                    <label for="message">Message</label>
                                    <textarea name="" id="" cols="12" rows="5" placeholder="Describe your parking lot size, current condition, and cleaning requirements..." className="form-control"></textarea><br/>
                                </div>
                                <Link><button type="submit"> Send Message </button></Link>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 col-sm-5 col-md-5">
                        <div className="contact-info">
                            <h3>Visit Our Facility</h3>
                            <ul>
                                <li>
                                <i className="fa-solid fa-location-dot"></i>
                                <div><span>Address</span><br/>
                                <div className="detail">
                                    <Link><span>123 Baseball Drive </span><br/>
                                    <span>Training City, TC 12345</span><br/></Link>
                                    </div>
                                </div>
                                </li>
                                <li>
                                <i className="fa-solid fa-phone"></i>
                                <div><span>Phone</span><br/>
                                <span className="detail"><Link>(555) 123-BALL</Link></span><br/>
                                </div>
                                </li>
                                <li>
                                <i className="fa-solid fa-envelope"></i>
                                <div><span>Email</span><br/>
                                <span className="detail"><Link>info@principlebaseball.com</Link></span><br/></div>
                                </li>
                                <li>
                                <i className="fa-solid fa-clock"></i>
                                <div><span>Hours</span><br/>
                                <div className="detail">
                                    <Link><span>Mon-Fri: 6:00 AM - 10:00 PM </span> <br/>
                                    <span>Sat-Sun: 8:00 AM - 8:00 PM</span></Link>
                                </div>
                                <br/></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
