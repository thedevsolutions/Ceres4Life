import { Input } from "antd";
import React from "react";

import { RiImageAddFill } from "react-icons/ri";

export default function PReports() {
  return (
    <>
        <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="dashboard-head">My Reports</h6>
          <div className="add-btn">
            <button className="btn btn-primary px-5">Add Report</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center my-5">
   <div className="col-lg-4">
          <div className="add-card">
            <div className="upload-img">
              <RiImageAddFill fontSize={"50px"}/>
            </div>
            <Input placeholder="Enter Title"/>
          </div>
   </div>
    </div>
    </>
  );
}
