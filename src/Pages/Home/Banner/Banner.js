import React from 'react';
import './Banner.css';
import banner1 from "../BannerImages/banner1.png";
// import banner2 from "../BannerImages/banner2.png";
import banner3 from "../BannerImages/banner3.png";
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
      <div className="banner-section">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <section className="container mt-4">
            <h1 className=" text-center text-dark"><span className="custom-text-color">Upcoming </span>Expected Launch Version</h1>
            <div className="row align-items-center mt-4 mx-1 background-shadow">
                <div className="col-12 col-md-6 p-4">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/bike-1.png" className="d-block w-100" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="images/bike-2.png" className="d-block w-100" alt="...">
                            </div>
                            <div className="carousel-item">
                                <img src="images/bike-3.png" className="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-4">
                    <h1>Honda CBR150R</h1>
                    <p className="text-muted">Be the first one</p>
                    <p className="">The 2021 Honda CBR150R has been launched in Indonesia. The updated model comes with a much more aggressive bodywork similar to the Honda CBR250RR. It also gets a more premium Showa SFF-BP inverted front fork and a rear monoshock. Interestingly, apart from providing a more sophisticated damping, the front fork isn’t preload-adjustable like the</p>
                    <h1>$689</h1>
                    <button className="btn-custom-design fw-bold mt-3">
                        Alert Me When Launched
                    </button>
                    
                </div>
            </div> 
        </section>  */}
      </div>
    );
};

export default Banner;