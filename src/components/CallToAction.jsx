import React from 'react'
import bg from '../assets/bg-1.jpg'
import camera from '../assets/camera.png'

function CallToAction() {
  return (
    <div className="container">
        <div className="cta cta-border mb-5" style={{backgroundImage: "url("+bg+")"}}>
            <img src={camera} alt="camera" className="cta-img"/>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <div className="cta-content">
                        <div className="cta-text text-right text-white">
                            <p>Shop Today’s Deals <br/><strong>Awesome Made Easy. HERO7 Black</strong></p>
                        </div>
                        <a href="#" className="btn btn-primary btn-round"><span>Shop Now - $429.99</span><i className="icon-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CallToAction
