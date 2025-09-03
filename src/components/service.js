import React from 'react';
import service1 from '../asset/images/sst-slider4.jpg';
import service2 from '../asset/images/side-view-kid-waiting-field.jpg';
import service3 from '../asset/images/full-shot-kids-playing-kickball.jpg';
import service4 from '../asset/images/pexels-cachi290-29827383.jpg';
import {Link} from 'react-router-dom';

export default function service() {
  return (
    <div>
       {/* <!-- service page --> */}
    <section class="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-12 col-sm-12 col-md-12">
                    <div class="service-title text-center">
                        <h2>Our Services</h2>
                        <p>Comprehensive training solutions for serious athletes</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-12 col-sm-6 col-md-3">
                    <div class="service-box">
                        <div class="service-image">
                            <img src={service1} alt=""/>
                            <div class="service-content">
                                <span>Private Lessons</span>
                                <p>One-on-one instruction tailored to your specific needs and skill level.</p>
                                <div class="service-btn">
                                    <Link>Learn More →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-12 col-sm-6 col-md-3">
                    <div class="service-box">
                        <div class="service-image">
                            <img src={service2} alt=""/>
                            <div class="service-content">
                                <span>Cage Rental</span>
                                <p>State-of-the-art batting cages available for individual or team practice.</p>
                                <div class="service-btn">
                                    <Link>Book Now →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-12 col-sm-6 col-md-3">
                    <div class="service-box">
                        <div class="service-image">
                            <img src={service3} alt=""/>
                            <div class="service-content">
                                <span>Summer Training</span>
                                <p>Intensive summer programs designed to elevate your game to the next level.</p>
                                <div class="service-btn">
                                    <Link>Register →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-12 col-sm-6 col-md-3">
                    <div class="service-box">
                        <div class="service-image">
                            <img src={service4} alt=""/>
                            <div class="service-content">
                                <span>Facility Rental</span>
                                <p>Rent our entire facility for team practices, camps, or special events.</p>
                                <div class="service-btn">
                                    <Link>Inquire →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
