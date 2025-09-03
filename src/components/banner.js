import React from 'react'
import { Link } from 'react-router-dom'

export default function banner() {
  return (
    <div>
       {/* <!-- banner --> */}
    <section className="banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12 col-md-12 col-sm-12">
                    <div className="banner-content text-center text-white">
                        <h1>Principle Baseball</h1>
                        <span>Automate Your Skills</span>
                        <p>High-performance training facility founded by former professional player Phillip Cuevas. Advanced instruction grounded in biomechanics and kinematic principles</p>
                        <div className="banner-btn">
                            <div className="start-traning">
                            <Link><button className="button2">Start Training</button></Link>
                            </div>
                            <div className="learn-more">
                                <Link><button className="button2">Learn More</button></Link>
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
