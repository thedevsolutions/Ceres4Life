import React from "react";
import {  Select } from "antd";
const { Option } = Select;

export default function ContactUs() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    function handleChange(value) {
        console.log(`selected ${value}`);
      }
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <div className="contact">
              <div className="contact-content">
                <h6>
                  Let’s get in <br />
                  Touch !
                </h6>
                <p>
                  We would love to hear from you and help you resolve any
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center footer py-5 mx-0">
          <div className="col-lg-5">
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
                <Select
                  defaultValue="I am"
                  size="large"
                  style={{ width: "100%" }}
                  onChange={handleChange}
                  className="mb-3"
                >
                  <Option value="prenatal">Pre-natal</Option>
                  <Option value="postnatal">Post-natal</Option>
                </Select>

                <div class="form-group">
                  <textarea
                    class="form-control"
                    placeholder="Describe your concern"
                    style={{height:"150px"}}
                  ></textarea>
                </div>
                <button class="btn btn-secondary w-100 my-5">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
