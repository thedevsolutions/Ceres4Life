import React from "react";
import { Link } from "react-router-dom";
export default function NewPassword() {
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
                <h5>New Password</h5>
                <p>Please enter password to setup your account.</p>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="New password"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <div className="my-5">
                    <Link to="/login">
                      <button class="btn btn-primary w-100">
                        Change Password
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
