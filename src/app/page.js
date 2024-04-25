import LoginLinks from '@/app/LoginLinks'


export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <div id="page" className="section">
                <div className="header-section header-transparent sticky-header header-fluid section">
                    <div className="header-inner">
                        <div className="container position-relative">
                            <div className="row justify-content-between align-items-center">

                                <div className="col-xl-2 col-auto">
                                    <div className="header-logo">
                                        <a href="index.html">
                                            <img className="dark-logo" src={'/images/logo/logo.png'}
                                                 alt="Fitness Logo" />
                                            <img className="light-logo" src={'/images/logo/logo.png'} alt="Fitness Logo" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col d-none d-xl-block">
                                    <div className="menu-column-area d-none d-xl-block position-static">
                                        <nav className="site-main-menu">
                                            <ul>
                                                <li>
                                                    <a href="index.html"><span className="menu-text">Home</span></a>
                                                </li>
                                                <li className="has-children">
                                                    <a href="about.html"><span className="menu-text">Pages</span></a>
                                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                                    <ul className="sub-menu">
                                                        <li><a href="about.html"><span
                                                            className="menu-text">About</span></a></li>
                                                        <li><a href="team.html"><span
                                                            className="menu-text">Our Team</span></a></li>
                                                        <li><a href="contact.html"><span
                                                            className="menu-text">Contact</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="our-program.html"><span
                                                        className="menu-text">Our Program</span></a>
                                                </li>
                                                <li className="has-children">
                                                    <a href="shop.html"><span className="menu-text">Shop</span></a>
                                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                                    <ul className="sub-menu">
                                                        <li><a href="shop.html"><span className="menu-text">Shop</span></a>
                                                        </li>
                                                        <li><a href="product-details.html"><span className="menu-text">Product
                                                            Details</span></a></li>
                                                        <li><a href="shopping-cart.html"><span className="menu-text">Shopping
                                                            Cart</span></a></li>
                                                        <li><a href="wishlist.html"><span
                                                            className="menu-text">Wishlist</span></a>
                                                        </li>
                                                        <li><a href="checkout.html"><span
                                                            className="menu-text">Checkout</span></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <a href="blog-grid.html"><span className="menu-text">Blog</span></a>
                                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                                    <ul className="sub-menu">
                                                        <li><a href="blog-grid.html"><span className="menu-text">Blog
                                                            Grid</span></a></li>
                                                        <li><a href="blog-details.html"><span className="menu-text">Blog
                                                            Details</span></a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="event.html"><span className="menu-text">Event</span></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                <div className="col-xl-2 col-auto d-flex align-items-center justify-content-end">
                                    <div className="header-search-area mr-xl-4 mr-0">

                                        <div className="header-search">
                                            <a href="" className="header-search-toggle"><i
                                                className="pe-7s-search pe-2x pe-va"></i></a>
                                        </div>
                                    </div>

                                    <div className="header-cart">

                                        <a className="header-cart-btn" href="shopping-cart.html"><span
                                            className="cart-count">2</span><i
                                            className="far fa-shopping-cart"></i></a>

                                        <div className="header-mini-cart">
                                            <div className="inner">

                                                <div className="mini-cart-products">
                                                    <div className="mini-cart-product">
                                                        <a href="#" className="thumb"><img
                                                            src="/images/shop/shopping-cart/product-1.jpg"
                                                            alt="" /></a>
                                                        <div className="content">
                                                            <a href="#" className="title">Online Student: Strategies for
                                                                Effective
                                                                Learning</a>
                                                            <span className="quantity">1 x <span
                                                                className="price">$67.00</span></span>
                                                        </div>
                                                        <a href="#" className="remove"><i className="far fa-times"></i></a>
                                                    </div>
                                                    <div className="mini-cart-product">
                                                        <a href="#" className="thumb"><img
                                                            src="/images/shop/shopping-cart/product-2.jpg"
                                                            alt="" /></a>
                                                        <div className="content">
                                                            <a href="#" className="title">Principles of Business
                                                                Administration</a>
                                                            <span className="quantity">1 x <span
                                                                className="price">$52.00</span></span>
                                                        </div>
                                                        <a href="#" className="remove"><i className="far fa-times"></i></a>
                                                    </div>
                                                </div>

                                                <div className="mini-cart-footer">
                                                    <div className="mini-cart-total">
                                                        <b>Total:</b>
                                                        <span className="amount">$119.00</span>
                                                    </div>
                                                    <div className="mini-cart-buttons">
                                                        <a href="shopping-cart.html"
                                                           className="btn btn-primary btn-hover-secondary">View Cart</a>
                                                        <a href="checkout.html"
                                                           className="btn btn-primary btn-hover-secondary">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="header-mobile-menu-toggle d-xl-none ml-sm-2">
                                        <button className="toggle">
                                            <i className="icon-top"></i>
                                            <i className="icon-middle"></i>
                                            <i className="icon-bottom"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="main-search-active">
                    <div className="sidebar-search-icon">
                        <button className="search-close"><i className="fal fa-times"></i></button>
                    </div>
                    <div className="sidebar-search-input">
                        <form action="#">
                            <div className="form-search">
                                <input id="search" className="input-text"  placeholder="" type="search" />
                                <button>
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                        <p className="form-description">Hit enter to search or ESC to close</p>
                    </div>
                </div>

                <div className="intro-slider-wrap section">
                    <div className="intro-section section">
                        <div className="container-fluid">
                            <div className="row row-cols-lg-1 row-cols-1">

                                <div className="col align-self-center">
                                    <div className="intro-content text-center">
                                        <span className="sub-title">Welcome to Richter CrossFit Center</span>
                                        <h2 className="title">Work Hard EveryDay</h2>
                                        <a href="#" className="btn btn-primary btn-hover-secondary btn-width-290-80">For
                                            Men</a>
                                        <a href="#"
                                           className="btn btn-outline-white btn-hover-primary btn-width-290-80">For
                                            Women</a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="section">
                    <div className="container-fluid p-0">
                        <div className="row row-cols-xl-4 row-cols-lg-2 row-cols-sm-2 row-cols-1 g-0">

                            <div className="col">
                                <div className="gym-cate">
                                    <div className="cat-image">
                                        <a className="image" href="#"><img src="/images/gym-cate/cate-1.jpg"
                                                                           alt="Categories" /></a>
                                    </div>
                                    <div className="cate-content">
                                        <div className="cate-inner">
                                            <h3 className="title">CARDIO</h3>
                                            <a href="#" className="btn btn-light btn-hover-primary">START NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="gym-cate">
                                    <div className="cat-image">
                                        <a className="image" href="#"><img src="/images/gym-cate/cate-2.jpg"
                                                                           alt="Categories" /></a>
                                    </div>
                                    <div className="cate-content">
                                        <div className="cate-inner">
                                            <h3 className="title">BODY BUILD</h3>
                                            <a href="#" className="btn btn-light btn-hover-primary">START NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="gym-cate">
                                    <div className="cat-image">
                                        <a className="image" href="#"><img src="/images/gym-cate/cate-3.jpg"
                                                                           alt="Categories" /></a>
                                    </div>
                                    <div className="cate-content">
                                        <div className="cate-inner">
                                            <h3 className="title">BOXING</h3>
                                            <a href="#" className="btn btn-light btn-hover-primary">START NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="gym-cate">
                                    <div className="cat-image">
                                        <a className="image" href="#"><img src="/images/gym-cate/cate-4.jpg"
                                                                           alt="Categories" /></a>
                                    </div>
                                    <div className="cate-content">
                                        <div className="cate-inner">
                                            <h3 className="title">YOGA</h3>
                                            <a href="#" className="btn btn-light btn-hover-primary">START NOW</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section section-padding-t100-b140 section-fluid">
                    <div className="container">
                        <div className="stroke-text">
                            <h2 className="heading-title">FITYOUR <br /> DAY</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="about-image">
                                    <img src="/images/about/about-2.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="about-content">
                                    <h3 className="title">Improve Yourself Everyday</h3>
                                    <p>Vestibulum sed lectus massa. Donec egestas, diam sed ultrices hendrerit, est
                                        justo
                                        gravida eros, a mollis ipsum justo dapibus lacus. Pellentesque dui libero,
                                        ultricies</p>
                                    <a href="#" className="btn btn-primary btn-hover-dark">START NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section-padding-t100-b140 section-fluid-240 bg-linear-black">
                    <div className="container">

                        <div className="section-title color-light text-center">
                            <h2 className="title">EXPERIENCED COACHES</h2>
                            <p className="sub-title">Phasellus nulla mauris, imperdiet a augue a</p>
                        </div>

                        <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 mb-n6">

                            <div className="col mb-6">
                                <div className="single-coach">
                                    <div className="thumbnial">
                                        <a className="image" href="#"><img src="/images/team/team-1.jpg" alt="" /></a>
                                        <div className="inner-block">
                                            <div className="slider-top-right"></div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Owen Cannon</h3>
                                        <span className="designation">Gym Coacher</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-6">
                                <div className="single-coach">
                                    <div className="thumbnial">
                                        <a className="image" href="#"><img src="/images/team/team-2.jpg" alt="" /></a>
                                        <div className="inner-block">
                                            <div className="slider-top-right"></div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Margaret Guzman</h3>
                                        <span className="designation">Yoga Coacher</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-6">
                                <div className="single-coach">
                                    <div className="thumbnial">
                                        <a className="image" href="#"><img src="/images/team/team-3.jpg" alt="" /></a>
                                        <div className="inner-block">
                                            <div className="slider-top-right"></div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">Minnie Sharp</h3>
                                        <span className="designation">Dancesport Coacher</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section section-padding-t100-b115 section-fluid">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2 className="title">CLASS EVENTS</h2>
                            <p className="sub-title">Phasellus nulla mauris, imperdiet a augue a</p>
                        </div>
                        <div className="event-slider swiper-container">

                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="single-event">
                                        <div className="event-head">
                                            <h3 className="title">GRADIO</h3>
                                            <span className="date">01-27-2020</span>
                                        </div>
                                        <div className="desc">
                                            <p>Vestibulum sed lectus massa. Donec egestas, diam sed ultrices hendrerit,
                                                est
                                                justo gravida eros, a mollis ips</p>
                                        </div>
                                        <div className="action">
                                            <a href="#" className="btn btn-outline-secondary btn-hover-primary">START
                                                NOW</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="single-event">
                                        <div className="event-head">
                                            <h3 className="title">CROSSFIT</h3>
                                            <span className="date">01-27-2020</span>
                                        </div>
                                        <div className="desc">
                                            <p>Vestibulum sed lectus massa. Donec egestas, diam sed ultrices hendrerit,
                                                est
                                                justo gravida eros, a mollis ips</p>
                                        </div>
                                        <div className="action">
                                            <a href="#" className="btn btn-outline-secondary btn-hover-primary">START
                                                NOW</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="single-event">
                                        <div className="event-head">
                                            <h3 className="title">POWERLIFTING</h3>
                                            <span className="date">01-27-2020</span>
                                        </div>
                                        <div className="desc">
                                            <p>Vestibulum sed lectus massa. Donec egestas, diam sed ultrices hendrerit,
                                                est
                                                justo gravida eros, a mollis ips</p>
                                        </div>
                                        <div className="action">
                                            <a href="#" className="btn btn-outline-secondary btn-hover-primary">START
                                                NOW</a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col">

                            </div>

                        </div>
                    </div>
                </div>

                <div className="section section-go-hard section-padding-t185-b150 section-fluid">
                    <div className="container">
                        <div className="video-stroke-text">
                            <h2 className="heading-title">GO HARD <br /> OR GO HOME</h2>
                        </div>
                        <div className="play-btn-area">
                            <a className="play-btn icon video-popup" href="https://www.youtube.com/watch?v=eS9Qm4AOOBY"><i
                                className="fal fa-play"></i></a>
                        </div>
                    </div>
                </div>

                <div className="section section-fluid-240">
                    <div className="container">
                        <div className="calculate-box">
                            <div className="section-title text-center">
                                <h2 className="title">CALCULATE YOUR BMI</h2>
                                <p>Your BMR calculator generates the number of calories your body burns per day at rest.
                                    Your
                                    BMR with activity factor is the number of calories your body burns per day based on
                                    the
                                    activity factor you selected.</p>
                            </div>
                            <div className="calculate-form">
                                <form action="#">
                                    <div className="row mb-n6">
                                        <div className="col-lg-6 mb-6">
                                            <input type="text" placeholder="Height / cm" name="height" />
                                        </div>
                                        <div className="col-lg-6 mb-6">
                                            <input type="text" placeholder="Weight / kg" name="weight" />
                                        </div>
                                        <div className="col-lg-6 mb-6">
                                            <input type="text" placeholder="Age" name="age" />
                                        </div>
                                        <div className="col-lg-6 mb-6">
                                            <input type="text" placeholder="Sex" name="sex" />
                                        </div>
                                        <div className="col-12 mb-6">
                                            <select>
                                                <option >Select an activity factor:</option>
                                                <option >Little or no Exercise / desk job</option>
                                                <option >Light exercise / sports 1 – 3 days/ week</option>
                                                <option >Moderate Exercise, sports 3 – 5 days / week
                                                </option>
                                                <option >Heavy Exercise / sports 6 – 7 days / week</option>
                                            </select>
                                        </div>
                                        <div className="col-12 text-center mb-6">
                                            <button
                                                className="btn btn-primary btn-hover-dark btn-width-200-60">CALCULATE
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="container-fulid">
                        <div className="row row-cols-lg-2 row-cols-1 g-0">

                            <div className="col">
                                <div className="single-banner">
                                    <div className="thumbnail">
                                        <a className="image" href="#"><img src="/images/banner/banner-1.jpg"
                                                                           alt="" /></a>
                                        <div className="inner-block">
                                            <div className="slider-top-right"></div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">COVID-19 <br /> ONLINE FITNESS</h3>
                                        <a href="#" className="btn btn-primary btn-hover-dark">START NOW</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="single-banner">
                                    <div className="thumbnail">
                                        <a className="image" href="#"><img src="/images/banner/banner-2.jpg"
                                                                           alt="" /></a>
                                        <div className="inner-block">
                                            <div className="slider-top-right"></div>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">COMPORTABLE SOLUTION</h3>
                                        <a href="#" className="btn btn-primary btn-hover-dark">START NOW</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="section section-padding-t120-b100 section-fluid-240">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="section-title text-left mb-lg-0 mb-40">
                                    <h2 className="title">OUR TESTIMONIAL</h2>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="testimonial-slider swiper-container">
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">
                                            <div className="testimonial">
                                                <div className="qute-icon">
                                                    <img src="/images/icon/qute.svg" alt="qute" />
                                                </div>
                                                <div className="testimonial-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Vestibulum sed lectus massa. Donec egestas, diam sed ultrices
                                                        hendrerit,
                                                        est justo gravida eros, a mollis ipsum justo dapibus lacus.
                                                        Pellentesque
                                                        dui libero, ultricies</p>
                                                </div>
                                                <div className="author-info">
                                                    <div className="image">
                                                        <img src="/images/testimonial/testimonial-1.png" alt="" />
                                                    </div>
                                                    <div className="cite">
                                                        <p className="name">Bobby Hughes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="testimonial">
                                                <div className="qute-icon">
                                                    <img src="/images/icon/qute.svg" alt="qute" />
                                                </div>
                                                <div className="testimonial-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Vestibulum sed lectus massa. Donec egestas, diam sed ultrices
                                                        hendrerit,
                                                        est justo gravida eros, a mollis ipsum justo dapibus lacus.
                                                        Pellentesque
                                                        dui libero, ultricies</p>
                                                </div>
                                                <div className="author-info">
                                                    <div className="image">
                                                        <img src="/images/testimonial/testimonial-1.png" alt="" />
                                                    </div>
                                                    <div className="cite">
                                                        <p className="name">Bobby Hughes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="swiper-slide">
                                            <div className="testimonial">
                                                <div className="qute-icon">
                                                    <img src="/images/icon/qute.svg" alt="qute" />
                                                </div>
                                                <div className="testimonial-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Vestibulum sed lectus massa. Donec egestas, diam sed ultrices
                                                        hendrerit,
                                                        est justo gravida eros, a mollis ipsum justo dapibus lacus.
                                                        Pellentesque
                                                        dui libero, ultricies</p>
                                                </div>
                                                <div className="author-info">
                                                    <div className="image">
                                                        <img src="/images/testimonial/testimonial-1.png" alt="" />
                                                    </div>
                                                    <div className="cite">
                                                        <p className="name">Bobby Hughes</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="swiper-pagination"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section section-padding section-fluid-240 blog-bg">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2 className="title">OUR BLOG</h2>
                        </div>
                        <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 gx-xl-12 mb-n6">

                            <div className="col mb-6">
                                <div className="blog">
                                    <div className="thumbnail">
                                        <a href="blog-details.html" className="image"><img
                                            src="/images/blog/grid/blog-1.jpg"
                                            alt="Blog Image" /></a>
                                        <span className="badge"><i className="fal fa-quote-left"></i></span>
                                    </div>
                                    <div className="info">
                                        <ul className="meta">
                                            <li><a href="#">Fitness,</a> <a href="#">Lifestyle</a></li>
                                            <li>03 Jul, 2020</li>
                                        </ul>
                                        <h3 className="title"><a href="blog-details.html">We Help to Build the
                                            Business</a></h3>
                                        <div className="desc">
                                            <p>Morbi felis velit, cursus eu nibh nec, elementum dapibus risus. Praesent
                                                iacul.
                                            </p>
                                        </div>
                                        <a href="#" className="btn btn-outline-secondary btn-hover-primary">READ
                                            MORE</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col mb-6">
                                <div className="blog">
                                    <div className="thumbnail">
                                        <a href="blog-details.html" className="image"><img
                                            src="/images/blog/grid/blog-2.jpg"
                                            alt="Blog Image" /></a>
                                        <span className="badge"><i className="fal fa-quote-left"></i></span>
                                    </div>
                                    <div className="info">
                                        <ul className="meta">
                                            <li><a href="#">Fitness,</a> <a href="#">Lifestyle</a></li>
                                            <li>03 Jul, 2020</li>
                                        </ul>
                                        <h3 className="title"><a href="blog-details.html">Vasectomy Reversal Review</a>
                                        </h3>
                                        <div className="desc">
                                            <p>Morbi felis velit, cursus eu nibh nec, elementum dapibus risus. Praesent
                                                iacul.
                                            </p>
                                        </div>
                                        <a href="#" className="btn btn-outline-secondary btn-hover-primary">READ
                                            MORE</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="view-blog-btn text-center mt-lg-12 mt-md-8 mt-6">
                            <a href="blog-grid.html">View all blog</a>
                        </div>
                    </div>
                </div>

                <div className="section section-padding-70 section-subscription">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="newsletter-title mb-md-0 mb-6">
                                    <h3 className="title">STAY WITH US</h3>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="newsletter-form-area">
                                    <form action="#">
                                        <input type="email" name="email" placeholder="EMAIL ADDRESS..." />
                                        <button className="form-submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-section section section-fluid-240" data-bg-color="#1C1C1C">
                    <div className="container">

                        <div className="row mb-lg-14 mb-md-10 mb-6 align-items-center">

                            <div className="col-lg-3 col-md-5 col-sm-12 col-12 col-12 mb-6">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="/images/logo/footer-logo.png" alt="Logo" /></a>
                                    </div>
                                    <div className="footer-widget-content">
                                        <div className="footer-social-inline">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin"></i></a>
                                            <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="offset-lg-1 col-lg-5 col-md-7 col-sm-12 col-12 mb-6">
                                <div className="footer-widget">
                                    <div className="footer-widget-content">
                                        <ul className="column-2">
                                            <li><a href="#">Hastheme for Business</a></li>
                                            <li><a href="#">Teach on Udemy</a></li>
                                            <li><a href="#">Get the app</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Help and Support</a></li>
                                            <li><a href="#">Affiliate</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-6">
                                <div className="footer-widget">
                                    <div className="footer-widget-content">
                                        <div className="ft-instagram-list">

                                            <div className="instagram-grid-wrap">

                                                <div className="item-grid grid-style--1">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="/images/instagram/instagram1.png"
                                                                 alt="instagram images" />
                                                        </a>
                                                        <div className="item-info">
                                                            <div className="inner">
                                                                <a href="#"><i className="fas fa-heart"></i>1k</a>
                                                                <a href="#"><i className="fas fa-comment-dots"></i>9</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-grid grid-style--1">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="/images/instagram/instagram2.png"
                                                                 alt="instagram images" />
                                                        </a>
                                                        <div className="item-info">
                                                            <div className="inner">
                                                                <a href="#"><i className="fas fa-heart"></i>1k</a>
                                                                <a href="#"><i className="fas fa-comment-dots"></i>9</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-grid grid-style--1">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="/images/instagram/instagram3.png"
                                                                 alt="instagram images" />
                                                        </a>
                                                        <div className="item-info">
                                                            <div className="inner">
                                                                <a href="#"><i className="fas fa-heart"></i>1k</a>
                                                                <a href="#"><i className="fas fa-comment-dots"></i>9</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-grid grid-style--1">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="/images/instagram/instagram4.png"
                                                                 alt="instagram images" />
                                                        </a>
                                                        <div className="item-info">
                                                            <div className="inner">
                                                                <a href="#"><i className="fas fa-heart"></i>1k</a>
                                                                <a href="#"><i className="fas fa-comment-dots"></i>9</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-grid grid-style--1">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="/images/instagram/instagram5.png"
                                                                 alt="instagram images" />
                                                        </a>
                                                        <div className="item-info">
                                                            <div className="inner">
                                                                <a href="#"><i className="fas fa-heart"></i>1k</a>
                                                                <a href="#"><i className="fas fa-comment-dots"></i>9</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="item-grid grid-style--1">
                                                    <div className="thumb">
                                                        <a href="#">
                                                            <img src="/images/instagram/instagram6.png"
                                                                 alt="instagram images" />
                                                        </a>
                                                        <div className="item-info">
                                                            <div className="inner">
                                                                <a href="#"><i className="fas fa-heart"></i>1k</a>
                                                                <a href="#"><i className="fas fa-comment-dots"></i>9</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col">
                                <p className="copyright">Copyright &copy; 2021 All Rights Reserved | Made with <i
                                    className="fal fa-heart"></i> by <a href="https://hasthemes.com/">HasThemes</a>.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <a href="#" className="scroll-top" id="scroll-top">
                    <i className="arrow-top fal fa-long-arrow-up"></i>
                    <i className="arrow-bottom fal fa-long-arrow-up"></i>
                </a>

            </div>
            <div id="site-main-mobile-menu" className="site-main-mobile-menu">
                <div className="site-main-mobile-menu-inner">
                    <div className="mobile-menu-header">
                        <div className="mobile-menu-logo">
                            <a href="index.html"><img src="/images/logo/logo.png" alt="" /></a>
                        </div>
                        <div className="mobile-menu-close">
                            <button className="toggle">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-menu-content">
                        <nav className="site-mobile-menu">
                            <ul>
                                <li>
                                    <a href="index.html"><span className="menu-text">Home</span></a>
                                </li>
                                <li className="has-children">
                                    <a href="about.html"><span className="menu-text">Pages</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="about.html"><span className="menu-text">About</span></a></li>
                                        <li><a href="team.html"><span className="menu-text">Our Team</span></a></li>
                                        <li><a href="contact.html"><span className="menu-text">Contact</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="our-program.html"><span className="menu-text">Our Program</span></a>
                                </li>
                                <li className="has-children">
                                    <a href="shop.html"><span className="menu-text">Shop</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="shop.html"><span className="menu-text">Shop</span></a></li>
                                        <li><a href="product-details.html"><span
                                            className="menu-text">Product Details</span></a>
                                        </li>
                                        <li><a href="shopping-cart.html"><span
                                            className="menu-text">Shopping Cart</span></a></li>
                                        <li><a href="wishlist.html"><span className="menu-text">Wishlist</span></a></li>
                                        <li><a href="checkout.html"><span className="menu-text">Checkout</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="blog-grid.html"><span className="menu-text">Blog</span></a>
                                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                                    <ul className="sub-menu">
                                        <li><a href="blog-grid.html"><span className="menu-text">Blog Grid</span></a>
                                        </li>
                                        <li><a href="blog-details.html"><span className="menu-text">Blog Details</span></a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="event.html"><span className="menu-text">Event</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
