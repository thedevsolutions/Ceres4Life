import React from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

export default function Signup() {
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
                  <h5>Welcome!</h5>
                  <p>Please Create an account to continue</p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div class="form-group">
                    <label>First Name</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter firstname"
                    />
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter lastname"
                    />
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="as">
                    <label>Signup As</label>
                    <Select
                      defaultValue="I am"
                      size="large"
                      style={{ width: "100%", textAlign: "left" }}
                      onChange={handleChange}
                      className="mb-3"
                    >
                      <Option value="provider">Provider</Option>
                      <Option value="patient">Patient</Option>
                    </Select>
                  </div>

                  <div className="my-3">
                    <Link to="/login">
                      <button class="btn btn-primary w-100">
                        Create Account
                      </button>
                    </Link>
                  </div>
                  <div class="text-center">
                    <label>
                      Already have an account?
                      <Link to="/login">Login</Link>
                    </label>
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
