import React from 'react'

function BottomHeader() {
  return (
    <div className="header-bottom sticky-header">
                <div className="container">
                    <div className="header-left">
                        <div className="dropdown category-dropdown">
                            <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Browse Categories">
                                Browse Categories <i className="icon-angle-down"></i>
                            </a>

                            <div className="dropdown-menu">
                                <nav className="side-nav">
                                    <ul className="menu-vertical sf-arrows">
                                        <li className="item-lead"><a href="#">Daily offers</a></li>
                                        <li className="item-lead"><a href="#">Gift Ideas</a></li>
                                        <li><a href="#">Beds</a></li>
                                        <li><a href="#">Lighting</a></li>
                                        <li><a href="#">Sofas & Sleeper sofas</a></li>
                                        <li><a href="#">Storage</a></li>
                                        <li><a href="#">Armchairs & Chaises</a></li>
                                        <li><a href="#">Decoration </a></li>
                                        <li><a href="#">Kitchen Cabinets</a></li>
                                        <li><a href="#">Coffee & Tables</a></li>
                                        <li><a href="#">Outdoor Furniture </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <div className="header-center">
                        <nav className="main-nav">
                            <ul className="menu sf-arrows">
                                <li className="megamenu-container active">
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="category.html">Shop</a>
                                </li>
                                <li>
                                    <a href="product.html" className="sf-with-ul">Product</a>

                                    <div className="megamenu megamenu-sm">
                                        <div className="row no-gutters">
                                            <div className="col-md-6">
                                                <div className="menu-col">
                                                    <div className="menu-title">Product Details</div>
                                                    <ul>
                                                        <li><a href="product.html">Default</a></li>
                                                        <li><a href="product-centered.html">Centered</a></li>
                                                        <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                                        <li><a href="product-gallery.html">Gallery</a></li>
                                                        <li><a href="product-sticky.html">Sticky Info</a></li>
                                                        <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                                        <li><a href="product-fullwidth.html">Full Width</a></li>
                                                        <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="banner banner-overlay">
                                                    <a href="category.html">
                                                        <img src="assets/images/menu/banner-2.jpg" alt="Banner"/>

                                                        <div className="banner-content banner-content-bottom">
                                                            <div className="banner-title text-white">
                                                                New Trends<br/><span><strong>spring 2019</strong></span>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a href="#" className="sf-with-ul">Pages</a>

                                    <ul>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="blog.html">Blog</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
                    </div>
                </div>
            </div>
  )
}

export default BottomHeader
