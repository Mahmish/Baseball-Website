import React from 'react';
import aboutimg from '../asset/images/convert.webp';

export default function about() {
  return (
    <div>
       {/* <!-- about page --> */}
    <section className="About-Principle-Baseball">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-12 col-sm-12 col-md-12">
                    <div className="about-content">
                        <h2>About Principle Baseball</h2>
                        <p>Founded by former professional player Phillip Cuevas, Principle Baseball is a high-performance training facility that combines traditional baseball fundamentals with cutting-edge biomechanical analysis. <br/><br/>
                        We provide advanced instruction in hitting, fielding, and base running, all grounded in scientific principles and data-driven methodologies. Our approach helps serious athletes refine their mechanics and compete at the highest level.</p>
                    </div>
                    <div className="properties">
                            <div className="text-center"><h5>500+</h5>
                            <span>Athletes Trained</span></div>
                            <div className="text-center"> <h5>15+</h5>
                            <span>Years Experience</span></div>
                            <div className="text-center"><h5>95%</h5>
                            <span>Success Rate</span></div>
                    </div>
                </div>

                <div className="col-lg-6 col-12 col-sm-12 col-md-12">
                    <div className="about-image text-center">
                        <img src={aboutimg} alt=""/>
                        <div className="image-content text-center">
                            <i className="fa-regular fa-user"></i>
                            <h4>Phillip Cuevas</h4>
                            <span>Founder & Head Instructor</span>
                            <p>Former professional player with expertise in biomechanics and kinematic analysis</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

    </section>
    </div>
  )
}
