import React from 'react';


import './Home.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Home() {
  return (
    <>
      <Header />
      <div className="Slider bg-white pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div class="owl-carousel owl-theme">
                <div class="item">
                  <div className="row mx-0">
                    <div className="col-lg-6 col-md-9 col-12 mx-auto d-flex flex-column justify-content-center">
                      <div className="h2">MicroNex Tech is Unlocking the
                        limitless potential of technology to
                        drive efficiency, productivity, and
                        success for businesses of all sizes.</div>
                      <div className="h6 py-3">
                        At TechLaunch Solutions, we understand that technology is at the heart of modern business
                        operations. Our team of skilled professionals combines their expertise with the latest
                        industry trends to offer tailored solutions that address the unique needs of each client.
                      </div>
                      <div className="btn-read my-4">
                        <a href="#" className='py-3 border px-5 rounded-3 border-dark border-2 text-decoration-none text-dark fw-bold d-block'>Read More</a>
                      </div>
                    </div>
                    <div className=" SliderImage col-lg-6 col-md-9 col-12 mx-auto d-flex align-items-center">
                      <img src={require('../../Images/Image-01.png')} alt="" className='w-100 rounded' draggable='false' />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="row mx-0">
                    <div className="col-lg-6 col-md-9 col-12 mx-auto d-flex flex-column justify-content-center">
                      <div className="h2">At MN Techgroup we
                        understand that technology is
                        at the heart of modern business
                        operations.</div>
                      <div className="h6 py-3">
                        Our team of skilled professionals combines their expertise with the latest industry trends to
                        offer tailored solutions that address the unique needs of each client.
                      </div>
                      <div className="btn-read my-4">
                        <a href="#" className='py-3 border px-5 rounded-3 border-dark border-2 text-decoration-none text-dark fw-bold d-block'>Read More</a>
                      </div>
                    </div>
                    <div className=" SliderImage col-lg-6 col-md-9 col-12 mx-auto d-flex align-items-center">
                      <img src={require('../../Images/image-2.jpg')} alt="" className='w-100 rounded border' draggable='false' />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="row mx-0">
                    <div className="col-lg-6 col-md-9 col-12 mx-auto d-flex flex-column justify-content-center">
                      <div className="h2">MicroNex Tech is Unlocking the
                        limitless potential of technology to
                        drive efficiency, productivity, and
                        success for businesses of all sizes.</div>
                      <div className="h6 py-3">
                        At TechLaunch Solutions, we understand that technology is at the heart of modern business
                        operations. Our team of skilled professionals combines their expertise with the latest
                        industry trends to offer tailored solutions that address the unique needs of each client.
                      </div>
                      <div className="btn-read my-4">
                        <a href="#" className='py-3 border px-5 rounded-3 border-dark border-2 text-decoration-none text-dark fw-bold d-block'>Read More</a>
                      </div>
                    </div>
                    <div className=" SliderImage col-lg-6 col-md-9 col-12 mx-auto d-flex align-items-center">
                      <img src={require('../../Images/image-1.jpg')} alt="" className='w-100 rounded' draggable='false' />
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div className="row mx-0">
                    <div className="col-lg-6 col-md-9 col-12 mx-auto d-flex flex-column justify-content-center">
                      <div className="h2">At MN Techgroup we
                        understand that technology is
                        at the heart of modern business
                        operations.</div>
                      <div className="h6 py-3">
                        Our team of skilled professionals combines their expertise with the latest industry trends to
                        offer tailored solutions that address the unique needs of each client.
                      </div>
                      <div className="btn-read my-4">
                        <a href="#" className='py-3 border px-5 rounded-3 border-dark border-2 text-decoration-none text-dark fw-bold d-block'>Read More</a>
                      </div>
                    </div>
                    <div className=" SliderImage col-lg-6 col-md-9 col-12 mx-auto d-flex align-items-center">
                      <img src={require('../../Images/Image-01.png')} alt="" className='w-100 rounded' draggable='false' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
