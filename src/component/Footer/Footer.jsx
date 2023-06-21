import React from 'react';
import './Footer.css';
import facebooksvg from '../../Images/facebook.svg';
import youtubesvg from '../../Images/Youtube.svg'
import linkedinsvg from '../../Images/Linkedin.svg'
import instagramsvg from '../../Images/Instagram.svg'
import whatsappsvg from '../../Images/Whatsapp.svg'
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <>
      <footer>

        <div className='container'>
          <div className="row">
            <div className='col-10 '>
              <div className='d-flex '>

                <div className=" social-media-icons mt-3">
                  <a href="#"><img src={facebooksvg} alt="Facebook" /></a>
                  <a href="#"><img src={youtubesvg} alt="YouTube" /></a>
                  <a href="#"><img src={linkedinsvg} alt="LinkedIn" /></a>
                  <a href="#"><img src={instagramsvg} alt="Instagram" /></a>
                  <a href="#"><img src={whatsappsvg} alt="Whatsapp" /></a>
                </div>

                <div className=" mt-3 footer-details">
                  <a href="#" className="d-inline-block mx-3">Any help?</a>
                  <a href="#" className="d-inline-block mx-3">Write Us!</a>
                  <a href="#" className="d-inline-block mx-3">Terms & Conditions</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </footer>

    </>
  );
}

export default Footer;
