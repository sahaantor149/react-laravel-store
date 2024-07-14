import React from 'react'
import Banner1 from '../assets/images/banner-1.png'
import Banner2 from '../assets/images/banner-2.jpg'
import Banner3 from '../assets/images/banner-3.png'

function Banner() {
  return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="banner banner-overlay banner-overlay-light">
                        <a href="#">
                            <img src={Banner1} alt="Banner"/>
                        </a>

                        <div className="banner-content">
                            <h4 className="banner-subtitle"><a href="#">Smart Offer</a></h4>
                            <h3 className="banner-title"><a href="#">Save $150 <strong>on Samsung <br/>Galaxy Note9</strong></a></h3>
                            <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="banner banner-overlay banner-overlay-light">
                        <a href="#">
                            <img src={Banner2} alt="Banner"/>
                        </a>

                        <div className="banner-content">
                            <h4 className="banner-subtitle"><a href="#">Time Deals</a></h4>
                            <h3 className="banner-title"><a href="#"><strong>Bose SoundSport</strong> <br/>Time Deal -30%</a></h3>
                            <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="banner banner-overlay banner-overlay-light">
                        <a href="#">
                            <img src={Banner3} alt="Banner"/>
                        </a>

                        <div className="banner-content">
                            <h4 className="banner-subtitle"><a href="#">Clearance</a></h4>
                            <h3 className="banner-title"><a href="#"><strong>GoPro - Fusion 360</strong> <br/>Save $70</a></h3>
                            <a href="#" className="banner-link">Shop Now<i className="icon-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Banner
