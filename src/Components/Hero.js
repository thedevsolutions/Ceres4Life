import React from "react";

export default function Hero() {
  return (
    <div className="container-fluid px-0">
      <div className="row py-5 justify-content-between align-items-center mx-0">
        <div className="col-lg-6">
          <h1 className="hero-text pl-5">
            Welcome to Your
            Virtual Maternity
            Gateway
          </h1>
         <div className="hero-btn pl-5 my-5">
         <button className="btn btn-secondary">Schedule consultation</button>
         </div>
        </div>
        <div className="col-lg-4 px-0">
            <div className="hero-img">
                <img src="/images/hero-img.svg" alt="hero" className="img-fluid"/>
            </div>
        </div>
      </div>
    </div>
  );
}
