import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center pt-5">
        <div className="col-lg-5">
          <div className="my-5">
            <div className="footer-logo">
              <img src="/images/Logo.svg" alt="logo" height={"120px"} />
              <h6>Health Portal</h6>
            </div>
            <div className="my-4">
              <Link to="/consultation">
              <button class="btn btn-secondary">Book A Consultation</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 pl-5">
          <div className="get">
          <h6>Get in Touch</h6>
          </div>
          <div className="email-address">            
            <h5>Address</h5>
            <p>110 E. Houston St, San Antonio TX</p>
          </div>
          <div className="email-address">
            <h5>Email Address</h5>
            <p>hello@9rainbows.com</p>
          </div>
          <div className="social mt-3">
            <img src="/images/fb.svg" alt="facebook"/>
            <img src="/images/linkedin.svg" alt="linkedin" className="pl-4"/>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-lg-12 col-md-6">
          <div className="text-center footer-img">
            <img src="/images/footer-img.svg" alt="footer-img" height={"150px"} />
          </div>
        </div>
      </div>
    </div>
  );
}
