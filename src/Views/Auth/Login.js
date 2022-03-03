import React from "react";
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="login-card">
            <div className="w-100">
              <div className="logo">
                <img src="/images/logo.svg" alt="logo" height={"150px"} />
              </div>
              <div className="password-texts">
                <h5>Welcome Back !</h5>
                <p>Please Login to continue</p>
              </div>
              <div className="row mt-5">
               <div className="col-lg-12">
               <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                  />
                </div>
                <p className="text-right"><a href="/forgot">Forgot Password?</a></p>
                <div className="my-5">
                <Link to="/home">
                <button class="btn btn-primary w-100">Login</button>
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
