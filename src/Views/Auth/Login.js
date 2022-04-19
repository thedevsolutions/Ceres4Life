import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;

export default function Login() {
  const [loginAs, setLoginAs] = useState("");
  function handleChange(value) {
    // console.log(`selected ${value}`);
    setLoginAs(value);
    // console.log(loginAs, "state");
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
                  <h5>Welcome Back !</h5>
                  <p>Please Login to continue</p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <label>Email Address</label>
                  <div class="form-group">
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
                      placeholder="Password"
                    />
                  </div>
                  <div className="as">
                    <label>Login As</label>
                    <Select
                      defaultValue="Login as"
                      size="large"
                      style={{ width: "100%", textAlign: "left" }}
                      onChange={handleChange}
                      className="mb-3"
                    >
                      <Option value="provider">Provider</Option>
                      <Option value="patient">Patient</Option>
                    </Select>
                  </div>
                  <p className="text-right">
                    <Link to="/forgot">Forgot Password?</Link>
                  </p>
                  <div className="my-3">
                    {loginAs === "provider" ? (
                      <Link to="/add-Drdetail">
                        <button className="btn btn-primary w-100">Login</button>
                      </Link>
                    ) : (
                      <Link to="/add-detail">
                        <button className="btn btn-primary w-100">Login</button>
                      </Link>
                    )}
                  </div>
                  <div class="text-center">
                    <label>
                      Don't have a account?
                      <Link to="/Signup">SignUp</Link>
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
