import React from 'react'
import cat1 from '../assets/images/1.png'
import cat2 from '../assets/images/2.png'
import cat3 from '../assets/images/3.png'
import cat4 from '../assets/images/4.png'
import cat5 from '../assets/images/5.png'
import cat6 from '../assets/images/6.png'

function Category() {
  return (
    <div className="container">
        <h2 className="title text-center mb-4">Explore Popular Categories</h2>
        
        <div className="cat-blocks-container">
            <div className="row">
                <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                        <figure>
                            <span>
                                <img src={cat1} alt="Category image"/>
                            </span>
                        </figure>

                        <h3 className="cat-block-title">Computer & Laptop</h3>
                    </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                        <figure>
                            <span>
                                <img src={cat2} alt="Category image"/>
                            </span>
                        </figure>

                        <h3 className="cat-block-title">Digital Cameras</h3>
                    </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                        <figure>
                            <span>
                                <img src={cat3} alt="Category image"/>
                            </span>
                        </figure>

                        <h3 className="cat-block-title">Smart Phones</h3>
                    </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                        <figure>
                            <span>
                                <img src={cat4} alt="Category image"/>
                            </span>
                        </figure>

                        <h3 className="cat-block-title">Televisions</h3>
                    </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                        <figure>
                            <span>
                                <img src={cat5} alt="Category image"/>
                            </span>
                        </figure>

                        <h3 className="cat-block-title">Audio</h3>
                    </a>
                </div>

                <div className="col-6 col-sm-4 col-lg-2">
                    <a href="category.html" className="cat-block">
                        <figure>
                            <span>
                                <img src={cat6} alt="Category image"/>
                            </span>
                        </figure>

                        <h3 className="cat-block-title">Smart Watches</h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
