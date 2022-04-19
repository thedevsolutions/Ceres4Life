import React from "react";
import { Link } from "react-router-dom";
// import { Select } from "antd";
// const { Option } = Select;

export default function Footer() {
  // function handleChange(value) {
  //   console.log(`selected ${value}`);
  // }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="text-center py-4">
            <h5 className="text-blue">
              This is not a certified clinic we are just connecting patients and
              providers into 1 platform
            </h5>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center pt-5">
        <div className="col-lg-4">
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
        <div className="col-lg-3">
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
            <img src="/images/fb.svg" alt="facebook" />
            <img src="/images/linkedin.svg" alt="linkedin" className="pl-4" />
          </div>
        </div>

        <div className="col-lg-4">
          <div className="contact-form">
            <div className="text-center">
              <h6>CONTACT US</h6>
              <p>We will reply to you as soon as possible.</p>
            </div>
            <div className="form py-4">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name" />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Phone No."
                />
              </div>
              {/* <Select
                defaultValue="I am"
                size="large"
                style={{ width: "100%" }}
                onChange={handleChange}
                className="mb-3"
              >
                <Option value="prenatal">Pre-natal</Option>
                <Option value="postnatal">Post-natal</Option>
              </Select> */}

              <div class="form-group">
                <textarea
                  class="form-control"
                  placeholder="Describe your concern"
                  style={{ height: "150px" }}
                ></textarea>
              </div>
              <button class="btn btn-secondary w-100 my-2">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-lg-12 col-md-6">
          <div className="text-center footer-img">
            <img
              src="/images/footer-img.svg"
              alt="footer-img"
              height={"150px"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
