import React from 'react'

export default function choose() {
  return (
    <div>
       {/* <!-- why choose us --> */}
    <section className="why-choose-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-12 col-md-12 col-sm-12">
                    <div className="why-choose-tittle text-black text-center">
                        <h2>Why Choose Principle Baseball?</h2>
                        <p>Data-driven approach to player development</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center mb-5">
                <div className="col-lg-4 col-12 col-sm-6 col-md-4">
                    <div className="choose-box text-center">
                        <i className="fa-solid fa-chart-simple"></i>
                        <h4>Cutting-Edge Technology</h4>
                        <p>Advanced measurement and tracking systems to monitor your progress and optimize performance.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12 col-sm-6 col-md-4">
                    <div className="choose-box text-center">
                        <i className="fa-solid fa-book-open"></i>
                        <h4>Professional Expertise</h4>
                        <p>Learn from Phillip Cuevas, former professional player with proven biomechanical training methods.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-12 sol-sm-6 col-md-4">
                    <div className="choose-box text-center">
                        <i className="fa-solid fa-bolt"></i>
                        <h4>Skill Automation</h4>
                        <p>Develop muscle memory and automated responses through precision training and repetition.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
