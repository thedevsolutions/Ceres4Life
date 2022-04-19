import React from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

export default function DoctorDetail() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="login-card">
            <div className="w-100">
              <div className="text-center">
                <div className="logo">
                  <img src="/images/logo.svg" alt="logo" height={"150px"} />
                </div>
                <div className="password-texts">
                  <h5>Please Add Doctor Details to continue</h5>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="as">
                    <label>PMC Verified</label>
                    <Select
                      defaultValue="I am"
                      size="large"
                      style={{ width: "100%", textAlign: "left" }}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    >
                      <Option value="Yes">Yes</Option>
                      <Option value="No">No</Option>
                    </Select>
                  </div>
                  <div className="as">
                    <label>Speciality</label>
                    <Select
                      defaultValue="Select your speciality "
                      size="large"
                      style={{ width: "100%", textAlign: "left" }}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    >
                      <Option value="Yes">Yes</Option>
                      <Option value="No">No</Option>
                    </Select>
                  </div>
                  <div class="form-group">
                    <label>License No.</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your license no"
                      required
                    />
                  </div>

                  <div className="as">
                    <label>Gender</label>
                    <Select
                      defaultValue="Select gender"
                      size="large"
                      style={{ width: "100%", textAlign: "left" }}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    >
                      <Option value="Male">Male</Option>
                      <Option value="Female">Female</Option>
                      <Option value="Other">Other</Option>
                    </Select>
                  </div>

                  <div className="my-3">
                    <Link to="/dr-dashboard">
                      <button className="btn btn-primary w-100">
                        Continue
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
