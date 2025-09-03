import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick'; // Import the Slider component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cap from'../asset/images/cap.png';
import jersey from'../asset/images/jersey.png';
import bat from'../asset/images/baseball-bat.png';
import gloves from'../asset/images/baseball.png';
import hoodies from'../asset/images/hoodie.png';




export default function Merch() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      {/* Merch page */}
      <section className="principle">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 col-sm-12 col-md-12">
              <div className="principle-title text-center">
                <h2>Gear Up for the Season!</h2>
                <p>Check out our official team merchandise, from jerseys to hats. Show your support and represent your favorite team!</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/* Use the Slider component */}
                <Slider {...settings}>
                  <div className="col-lg-4">
                    <div className="principle-box">
                      <div className="principle-image">
                        <img src={jersey} alt="Official Team Jersey" />
                        <div className="princIDle-content">
                          <span>Official Team Jersey</span>
                          <p>Premium moisture-wicking fabric with official Principle Baseball logo and player numbers</p>
                          <span className="price">$65.00</span>
                          <div className="principle-btn">
                            <Link to="#">Shop Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="principle-box">
                      <div className="principle-image">
                        <img src={cap} />
                        <div className="principle-content">
                          <span>Classic Team Cap</span>
                          <p>Structured 6-panel design with embroidered logo and adjustable strap for perfect fit</p>
                          <span className="price">$25.00</span>
                          <div className="principle-btn">
                            <Link to="#">Shop Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="principle-box">
                      <div className="principle-image">
                        <img src={bat} alt="Custom Engraved Bat" />
                        <div className="principle-content">
                          <span>Custom Engraved Bat</span>
                          <p>Craft your game with a professional maple bat, custom-engraved to your specifications.</p>
                          <span className="price">$120.00</span>
                          <div className="principle-btn">
                            <Link to="#">Customize & Order</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="principle-box">
                      <div className="principle-image">
                        <img src={gloves} alt="Pro Training Glove" />
                        <div className="principle-content">
                          <span>Pro Training Glove</span>
                          <p>Premium leather fielding glove with advanced grip technology and quick break-in design</p>
                          <span className="price">$179.99</span>
                          <div className="principle-btn">
                            <Link to="#">Shop Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="principle-box">
                      <div className="principle-image">
                        <img src={hoodies} alt="Team Performance Hoodie" />
                        <div className="principle-content">
                          <span>Team Performance Hoodie</span>
                          <p>Ultra-soft fleece hoodie with team logo and performance fabric technology</p>
                          <span className="price">$69.99</span>
                          <div className="principle-btn">
                            <Link to="#">Shop Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}