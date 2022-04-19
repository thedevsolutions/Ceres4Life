import React from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

export default function PatientDetail() {
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
                  <h5>Please Add Patient Details to continue</h5>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <label>Week Of Pregnancy (If Applicable)</label>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="1"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label>No. of Children (If Applicable)</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="1"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label>Existing Condition</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter your condition in detail"
                      required
                    />
                  </div>

                  <div className="as">
                    <label>Blood Group</label>
                    <Select
                      defaultValue="Select blood group"
                      size="large"
                      style={{ width: "100%", textAlign: "left" }}
                      onChange={handleChange}
                      className="mb-3"
                      required
                    >
                      <Option value="Blood Group A+">Blood Group A+</Option>
                      <Option value="Blood Group A-">Blood Group A-</Option>
                      <Option value="Blood Group B+">Blood Group B+</Option>
                      <Option value="Blood Group B-">Blood Group B-</Option>
                      <Option value="Blood Group O+">Blood Group O+</Option>
                      <Option value="Blood Group O-">Blood Group O-</Option>
                    </Select>
                  </div>

                  <div className="my-3">
                    <Link to="/dashboard">
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
